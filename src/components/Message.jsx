import React, { createContext, useState, useContext, useEffect } from 'react';

const MessageContext = createContext();

export function MessageProvider({ children }) {
  const [message, setMessage] = useState({ text: '', type: '' });

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  );
}

export function useMessage() {
  return useContext(MessageContext);
}

function Message() {
  const { message, setMessage } = useMessage();
  const bgColor = message.type === 'error' ? 'bg-danger' : 'bg-success';

  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => {
        setMessage({ text: '', type: '' });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message, setMessage]);

  if (!message.text) return null;

  return (
    <div 
      className={`message ${bgColor} text-white w-100 p-2 mb-0 text-center`}
      style={{
        position: 'fixed',
        top: '38px',
        left: 0,
        right: 0,
        zIndex: 1030,
      }}
    >
      <p className='h6 mb-0'>{message.text}</p>
    </div>
  );
}

export default Message;
