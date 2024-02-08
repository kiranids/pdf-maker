import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatBot from 'react-simple-chatbot';
const Chat = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([
      {
        id: 1,
        message: 'Welcome to the hospital chatbot!',
        trigger: '2',
      },
    ]);
  }, []);
  const handleNewUserMessage = async (newMessage) => {
    setMessages([
      ...messages,
      { id: messages.length + 1, message: newMessage, user: true },
    ]);
    // Send the user's message to your backend or GPT API
    const response = await axios.post('/api/gpt', { message: newMessage });
    // Display the GPT model's response
    setMessages([
      ...messages,
      { id: messages.length + 1, message: response.data.message, trigger: '2' },
    ]);
  };
  return <ChatBot steps={messages} handleEnd={() => console.log('Chat ended')} userDelay={500} handleUserMessage={handleNewUserMessage} />;
};
export default Chat;