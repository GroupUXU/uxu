import fetch from 'node-fetch';
import type { NextApiRequest, NextApiResponse } from 'next';
import { CONFIG_SEARCH_ENGINE } from '../../../config/configSearchEngine';


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
      Authorization: `Bearer ${CONFIG_SEARCH_ENGINE.searchClientData.api.auth}`,
    },
  };

  try {
    const meiliSearchResponse = await fetch(`${CONFIG_SEARCH_ENGINE.searchClientData.api.url}/indexes/${CONFIG_SEARCH_ENGINE.searchClientData.indexName}/search?q=${encodedQuery}&sort=createdAt:desc&limit=20`, options);
    const data = await meiliSearchResponse.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};

export default handler;
