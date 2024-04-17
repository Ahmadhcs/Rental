// src/BikeModal.js
import React, { useState } from 'react';
import axios from "axios"

const BikeModal = ({ bike, onClose }) => {
  const [rating, setRating] = useState(bike.rating);
  const [reserved, setReserved] = useState(false);

  const handleReserve = () => {
    // Placeholder for reservation logic
    setReserved(true);
  };

  const handleRate = async() =>{

    try{
      const response = await axios.post("http://localhost:8001/api/rateBike", {
        userID: localStorage.getItem("ID"), 
        bikeID: bike._id,
        rating
      })

      // if(response.status) send alert that it sas successfull 

    }catch(error){

    }

  }

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleCancelReservation = () => {
    // Placeholder for cancel reservation logic
    setReserved(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mt-4 mr-4 bg-transparent hover:bg-gray-200 p-2 rounded-full"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <h2 className="text-lg font-bold mb-4">{bike.model}</h2>
        <div className="mb-4">Color: {bike.color}</div>
        <div className="mb-4">Location: {bike.location}</div>
        <div className="mb-4">Rating: {bike.averageRating} / 5</div>

        <div>
          <label htmlFor="rating" className="block mb-2">Rate the bike:</label>
          <select id="rating" value={rating} onChange={handleRatingChange} className="border-gray-300 rounded-md">
            {[1, 2, 3, 4, 5].map(score => (
              <option key={score} value={score}>{score}</option>
            ))}
          </select>
        </div>

        <div className="mt-4">
          {!reserved ? (
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleReserve}>
              Reserve
            </button>
          ) : (
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleCancelReservation}>
              Cancel Reservation
            </button>
          )}
        </div>

        <div className="mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleRate}>
              Rate
            </button>
        </div>
      </div>
    </div>
  );
};

export default BikeModal;
