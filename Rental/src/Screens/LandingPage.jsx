import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-4">Welcome to the App</h1>
        <div className="flex flex-col space-y-4">
          <button
            className="bg-blue-500 text-white text-lg rounded-lg p-2 shadow-lg hover:bg-blue-600 transition-colors"
            onClick={() => console.log('User Side')}
          >
            User Side
          </button>
          <button
            className="bg-green-500 text-white text-lg rounded-lg p-2 shadow-lg hover:bg-green-600 transition-colors"
            onClick={() => console.log('Manager Side')}
          >
            Manager Side
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
