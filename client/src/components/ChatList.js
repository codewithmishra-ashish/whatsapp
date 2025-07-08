import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const ChatList = ({ onSelectChat }) => {
  const { logout } = useContext(AuthContext);

  // Dummy users for testing
  const users = [
    { id: '1', name: 'User One' },
    { id: '2', name: 'User Two' },
  ];

  return (
    <div className="w-full md:w-1/3 bg-white border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-4 bg-green-600 text-white flex items-center justify-between">
        <h2 className="text-xl font-bold">WhatsApp Clone</h2>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
      {users.map(user => (
        <div
          key={user.id}
          className="p-4 border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
          onClick={() => onSelectChat(user)}
        >
          <h3 className="font-semibold">{user.name}</h3>
          <p className="text-gray-600 text-sm">Click to chat</p>
        </div>
      ))}
    </div>
  );
};

export default ChatList;