import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Login from './components/Login';
import Signup from './components/Signup';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';

function App() {
  const { user, loading } = useContext(AuthContext);
  const [selectedChat, setSelectedChat] = useState(null);

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <div className="h-screen bg-gray-100">
        <Routes>
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
          <Route
            path="/"
            element={
              user ? (
                <div className="flex h-screen">
                  <ChatList onSelectChat={setSelectedChat} />
                  <ChatWindow selectedChat={selectedChat} />
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="*" element={<div>404: Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;