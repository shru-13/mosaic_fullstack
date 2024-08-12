// src/components/ChatbotButton.js
import React, { useState } from 'react';
import './ChatbotButton.css';

function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input }]);
      setInput('');

      // Simulate AI response
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          { sender: 'bot', text: 'This is an AI response.' }
        ]);
      }, 1000);
    }
  };

  return (
    <div>
      <div className="chatbot-button" onClick={handleClick}>
        ?
      </div>
      {isOpen && (
        <div className="chatbot-dialog">
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-message ${msg.sender === 'user' ? 'user' : 'bot'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatbotButton;
