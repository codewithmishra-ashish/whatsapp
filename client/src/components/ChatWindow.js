import React from 'react';

const ChatWindow = ({ selectedChat }) => {
  if (!selectedChat) {
    return (
      <div className="flex-1 flex items-center justify-center h-screen bg-gray-100">
        <p className="text-gray-500">Select a chat to start messaging</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-screen bg-gray-100">
      <div className="p-4 bg-green-600 text-white">
        <h2 className="text-xl font-bold">{selectedChat.name}</h2>
      </div>
      <div className="flex-1 p-4">
        <p className="text-gray-600">Chat with {selectedChat.name} will appear here.</p>
      </div>
    </div>
  );
};

export default ChatWindow;