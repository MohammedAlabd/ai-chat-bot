import React from 'react';
import { Message } from './Message.types';

type Props = {
 message: Message;
};

const Message: React.FC<Props> = ({ message }) => {
 if (message.role === 'user') {
  return (
   <div className='chat chat-start'>
    <div className='chat-bubble chat-bubble-primary'>{message.content}</div>
   </div>
  );
 }

 return (
  <div className='chat chat-end'>
   <div className='chat-bubble'>{message.content}</div>
  </div>
 );
};

export default Message;
