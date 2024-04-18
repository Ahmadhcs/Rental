import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();


    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-700 mb-8">Bike Rental App</h1>
      <div className="flex flex-col items-center">
          <button
              onClick={() => navigate('/managerLanding')}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 mb-8"  // Added margin-bottom to first button
          >
              Manager Side
          </button>
          <button
              onClick={() => navigate('/userLanding')}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
              User Side
          </button>
      </div>
  </div>
  
    );
};

export default LandingPage;
