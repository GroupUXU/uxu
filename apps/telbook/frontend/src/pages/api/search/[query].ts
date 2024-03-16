import fetch from 'node-fetch';
import type { NextApiRequest, NextApiResponse } from 'next';
import { adapterSearchPhoneData } from '../../../utils/adapters';
import { parserPhoneNumberPL } from 'utils';

type Handler = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

const handler: Handler = async (req, res) => {

  if (req.method !== 'GET') {
    res.status(405).end();
    return;
  }

  const query = req.query.query as string;
  const phone: string | null = parserPhoneNumberPL(query);
  const isPhone = Boolean(phone)
  
  if(!isPhone) {
    res.status(405).end();
    return;
  }

  const options = {
    method: 'GET'
  };

  try {
    const searchResponse = await fetch(`http://0.0.0.0:1337/api/phones?filters[phone][$eq]=${phone}`, options);
    const data: unknown = await searchResponse.json();
    const returnData = adapterSearchPhoneData(data);
    res.status(200).json(returnData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};

export default handler;
