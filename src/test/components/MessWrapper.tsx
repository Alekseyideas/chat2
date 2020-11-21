import React from 'react';

interface MessWrapperProps {
  text: string;
}

export const MessWrapper: React.FC<MessWrapperProps> = ({ text }) => {
  return (
    <div style={{ padding: '20px' }}>
      <p>{text}</p>
    </div>
  );
};
