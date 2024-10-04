import React from 'react';
import { useMessage } from '../context/MessageContext';

function Message() {
  const { message } = useMessage();
  const bgColor = message.type === 'error' ? 'bg-danger' : 'bg-info';

  return (
    <>
      {message.text && (
        <div className={`my-1 text-center ${bgColor} text-white rounded w-50 mx-auto`}>
          <p className='h6'>{message.text}</p>
        </div>
      )}
    </>
  );
}

export default Message;
