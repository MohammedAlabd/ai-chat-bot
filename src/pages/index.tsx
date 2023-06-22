import Image from 'next/image';
import axios from 'axios';
import { Inter } from 'next/font/google';
import Message from '@/components/message/Message';
import { FormEvent, useState } from 'react';
import { MessageType } from '@/components/message/Message.types';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
 const [messages, setMessages] = useState<MessageType[]>([]);
 const [inputValue, setInputValue] = useState<string>('');

 const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const newMessages = [...messages, { role: 'user', content: inputValue }];
  setMessages(newMessages);

  try {
   const res = await axios.post<{ message: string }>('/api/send-message', newMessages);
   console.log(res);
   setMessages([...newMessages, { role: 'system', content: res.data.message }]);
   setInputValue('');
  } catch (error) {
   setMessages(newMessages.slice(0, -1));
   console.error(error);
  }
 };

 return (
  <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
   <div>
    {messages.map((message) => (
     <Message key={message.content} message={message} />
    ))}
   </div>
   <form onSubmit={handleSendMessage} className='w-full'>
    <textarea
     onChange={(e) => {
      setInputValue(e.target.value);
     }}
     value={inputValue}
     className='textarea textarea-bordered textarea-md w-full'
     placeholder='Chat with your assistance'
    ></textarea>
    <button type='submit' className='btn btn-outline btn-primary'>
     Send
    </button>
   </form>
  </main>
 );
}
