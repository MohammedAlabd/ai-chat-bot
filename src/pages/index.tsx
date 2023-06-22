import Image from 'next/image';
import { Inter } from 'next/font/google';
import Message from '@/components/message/Message';
import { FormEvent, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
 const [messages, setMessages] = useState([
  { role: 'user', content: 'Who won the world series in 2020?' },
  { role: 'assistant', content: 'The Los Angeles Dodgers won the World Series in 2020.' },
  { role: 'user', content: 'Where was it played?' },
 ]);
 const [inputValue, setInputValue] = useState<string>('');

 const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setMessages((prev) => [...prev, { role: 'user', content: inputValue }]);
  setInputValue('');
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
