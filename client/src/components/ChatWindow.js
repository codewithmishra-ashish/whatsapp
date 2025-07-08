import React, { useState } from 'react';

const ChatWindow = () => {
  const [message, setMessage] = useState('');
  // Dummy messages for now
  const messages = [
    { id: 1, sender: 'John Doe', text: 'Hey, how are you?', time: '10:30 AM' },
    { id: 2, sender: 'You', text: 'I’m good, thanks!', time: '10:32 AM' },
  ];

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      console.log('Message sent:', message);
      setMessage('');
      // Real-time logic will be added later
    }
  };

  return (
    <div className="flex-1 flex flex-col h-screen">
      <div className="p-4 bg-green-600 text-white flex items-center">
        <h2 className="text-xl font-bold">John Doe</h2>
      </div>
      <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`mb-4 ${msg.sender === 'You' ? 'text-right' : 'text-left'}`}
          >
            <div
              className={`inline-block p-3 rounded-lg ${
                msg.sender === 'You' ? 'bg-green-500 text-white' : 'bg-white'
              }`}
            >
              <p>{msg.text}</p>
              <span className="text-xs text-gray-500">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="p-4 bg-white flex">
        <input
          type="text"
          className="flex-1 p-3 border rounded-l-lg focus:outline-none"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-600 text-white p-3 rounded-r-lg hover:bg-green-700"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;