import React, { createContext, useState, useContext, useEffect, useRef } from 'react';
import './Message.css'; 
// Create the context
const MessageContext = createContext();

// Provider component
export function MessageProvider({ children }) {
  const [message, setMessage] = useState(null);

  const showMessage = (text, type = 'info') => {
    setMessage({ text, type });
  };

  const clearMessage = () => {
    setMessage(null);
  };

  return (
    <MessageContext.Provider value={{ message, showMessage, clearMessage }}>
      {children}
      <Message />
    </MessageContext.Provider>
  );
}

// Hook for using the message context
export function useMessage() {
  return useContext(MessageContext);
}

// Message display component
function Message() {
  const { message, clearMessage } = useMessage();
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const messageRef = useRef(null);

  useEffect(() => {
    if (message) {
      setIsLeaving(false);
      // Force a reflow before adding the 'show' class
      messageRef.current.offsetHeight;
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsLeaving(true);
        setTimeout(() => {
          setIsVisible(false);
          clearMessage();
        }, 1000);
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, [message, clearMessage]);

  if (!message) return null;

  return (
    <div 
      ref={messageRef}
      className={`message ${message.type} ${isVisible ? 'show' : ''} ${isLeaving ? 'leaving' : ''} mt-4 text-center`}
    >
      {message.text}
    </div>
  );
}

export default MessageProvider;
