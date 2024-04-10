import React from 'react';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
    const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-4">Bike Rental App</h1>
        <div className="flex flex-col space-y-4">
          <button
            className="bg-blue-500 text-white text-lg rounded-lg p-2 shadow-lg hover:bg-blue-600 transition-colors"
            onClick={() => navigate("/userLanding")}
          >
            User Side
          </button>
          <button
            className="bg-green-500 text-white text-lg rounded-lg p-2 shadow-lg hover:bg-green-600 transition-colors"
            onClick={() => navigate("/managerLanding")}
          >
            Manager Side
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
