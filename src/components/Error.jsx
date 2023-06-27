import React from 'react';

export default function Error({ children }) {
  return (
    <div>
      <p className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5">
        {children}
      </p>
    </div>
  );
}
