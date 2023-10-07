import fetch from 'node-fetch';
import type { NextApiRequest, NextApiResponse } from 'next';

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
      Authorization: 'Bearer 19c47f0f98f4d55c468e01dda85f482c5b5fdf14f582c7f4f60a085a1926964c',
    },
  };

  try {
    const meiliSearchResponse = await fetch(`https://ms-9ae19e2142f7-5386.fra.meilisearch.io/indexes/article/search?q=${encodedQuery}&sort=createdAt:desc&limit=20`, options);
    const data = await meiliSearchResponse.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};

export default handler;
