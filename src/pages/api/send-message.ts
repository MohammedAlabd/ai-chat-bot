import openai from '@/utils/openai';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
 message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
 if (req.method === 'POST') {
  const chatCompletion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: req.body
  })
  
  console.log(chatCompletion.data.choices[0].message)
  if(chatCompletion.data.choices[0].message && chatCompletion.data.choices[0].message.content){
    res.status(200).json({ message: chatCompletion.data.choices[0].message.content });
  }
  res.status(500).json(new Error('internal server error'));

  
 }
 {
  res.status(404).json(new Error('Not Found'));
 }
}
