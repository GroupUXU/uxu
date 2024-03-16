import fetch from 'node-fetch';
import type { NextApiRequest, NextApiResponse } from 'next';
import { searchEngineConfig } from '../../../config';
import { adapterSearchPhoneData} from '../../../utils/adapters'

type Handler = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

const handler: Handler = async (req, res) => {
  if (req.method !== 'GET') {
    res.status(405).end();
    return;
  }

  const query = req.query.query as string;
  const encodedQuery = encodeURIComponent(query);

  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${searchEngineConfig.searchClientData.api.auth}`,
    },
  };

  try {
    const meiliSearchResponse = await fetch(`${searchEngineConfig.searchClientData.api.url}/indexes/${searchEngineConfig.searchClientData.indexName}/search?sort="createdAt:desc"&limit=20&q=${encodedQuery}`, options);
    const data = await meiliSearchResponse.json();
    res.status(200).json(adapterSearchPhoneData(data));
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};

export default handler;
