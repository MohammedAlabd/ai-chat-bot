import React from 'react';
import { MessageType } from './Message.types';

type Props = {
 message: MessageType;
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
