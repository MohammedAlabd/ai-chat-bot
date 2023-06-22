import Image from 'next/image';
import { Inter } from 'next/font/google';
import Message from '@/components/message/Message';

const inter = Inter({ subsets: ['latin'] });

const messages = [
 { role: 'user', content: 'Who won the world series in 2020?' },
 { role: 'assistant', content: 'The Los Angeles Dodgers won the World Series in 2020.' },
 { role: 'user', content: 'Where was it played?' },
];

export default function Home() {
 return (
  <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
   <div>
    {messages.map((message) => (
     <Message key={message.content} message={message} />
    ))}
   </div>
   <textarea
    className='textarea textarea-bordered textarea-md w-full'
    placeholder='Chat with your assistance'
   ></textarea>
  </main>
 );
}
