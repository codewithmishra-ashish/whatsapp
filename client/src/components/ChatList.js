import React from 'react';

const ChatList = () => {
  // Dummy data for now
  const chats = [
    { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', time: '10:30 AM' },
    { id: 2, name: 'Jane Smith', lastMessage: 'See you soon!', time: '9:15 AM' },
  ];

  return (
    <div className="w-full md:w-1/3 bg-white border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-4 bg-green-600 text-white flex items-center">
        <h2 className="text-xl font-bold">WhatsApp Clone</h2>
      </div>
      {chats.map(chat => (
        <div
          key={chat.id}
          className="p-4 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
        >
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold">{chat.name}</h3>
              <p className="text-gray-600 text-sm">{chat.lastMessage}</p>
            </div>
            <span className="text-gray-500 text-sm">{chat.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;