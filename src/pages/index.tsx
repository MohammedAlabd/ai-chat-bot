import Image from 'next/image';
import axios from 'axios';
import { Inter } from 'next/font/google';
import Message from '@/components/message/Message';
import { FormEvent, useState } from 'react';
import { MessageType } from '@/components/message/Message.types';
import { useChat } from '@/models/chat/useChat';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
 const [inputValue, setInputValue] = useState<MessageType['content']>('');
 const [error, setError] = useState<string>('');
 const { messages, onMessageSend } = useChat();

 const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
   await onMessageSend(inputValue);
   setInputValue('');
   setError('');
  } catch (error: any) {
   setError(error.message);
  }
 };

 return (
  <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
   {Boolean(error) && <div className='alert alert-error'>
    <svg xmlns='http://www.w3.org/2000/svg' className='stroke-current shrink-0 h-6 w-6' fill='none' viewBox='0 0 24 24'>
     <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
     />
    </svg>
    <span>{error}</span>
   </div>}
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
