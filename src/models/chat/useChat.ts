import { MessageType } from '@/components/message/Message.types';
import axios from 'axios';
import { useState } from 'react';

const useChat = () => {
 const [messages, setMessages] = useState<MessageType[]>([]);

 const handleSendMessage = async (message: MessageType['content']) => {
  const newMessages = [...messages, { role: 'user', content: message }];
  setMessages(newMessages);
  try {
   const res = await axios.post<{ message: string }>('/api/send-message', newMessages);
   setMessages([...newMessages, { role: 'system', content: res.data.message }]);
  } catch (error) {
   setMessages(newMessages.slice(0, -1));
   throw error;
  }
 };

 return {messages, onMessageSend: handleSendMessage}
};

export { useChat };
