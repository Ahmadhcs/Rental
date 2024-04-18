import React, { useState } from 'react';
import axios from 'axios';

const BikeModal = ({ bike, onClose }) => {
  const [reserved, setReserved] = useState(bike.isReserved);
  const [reservationDuration, setReservationDuration] = useState('');
  const currentUserId = localStorage.getItem('ID');  
  console.log(currentUserId)

  const handleReserve = async () => {
    const reservationStart = new Date(); // Reservation starts now
    const reservationEnd = new Date(reservationStart.getTime() + parseInt(reservationDuration) * 60000); // End time based on selected duration

    try {
      const response = await axios.post('http://localhost:8001/api/reserveBike', {
        bikeID: bike._id,
        userID: currentUserId,
        reservationStart: reservationStart.toISOString(),
        reservationEnd: reservationEnd.toISOString()
      });

      if (response.status === 200) {
        alert('Bike reserved successfully!');
        setReserved(true);
        onClose(); // Optionally close the modal
      }
    } catch (error) {
      console.error('Error reserving bike:', error);
      alert('Error reserving bike.');
    }
  };

  const handleCancelReservation = async () => {
    try {
      const response = await axios.delete(`http://localhost:8001/api/cancelReserve?bikeID=${bike._id}&userID=${currentUserId}`);
      
      if (response.status === 200) {
        alert('Reservation cancelled successfully!');
        setReserved(false);
        onClose(); // Optionally close the modal
      }
    } catch (error) {
      console.error('Error canceling reservation:', error);
      alert('Error canceling reservation.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white p-8 rounded-lg relative w-full max-w-md">
        <button onClick={onClose} className="absolute top-0 right-0 mt-4 mr-4 text-black bg-transparent hover:bg-gray-200 p-2 rounded-full">
          <span>&times;</span>
        </button>

        <h2 className="text-lg font-bold mb-4">{bike.model}</h2>
        <div className="mb-4">Color: {bike.color}</div>
        <div className="mb-4">Location: {bike.location}</div>
        <div className="mb-4">Rating: {bike.rating} / 5</div>

        {!reserved ? (
          <div className="mt-4">
            <label htmlFor="duration" className="block mb-2">Select Duration:</label>
            <select id="duration" value={reservationDuration} onChange={(e) => setReservationDuration(e.target.value)} className="border-gray-300 rounded-md w-full">
              <option value="">Select Duration</option>
              <option value="30">30 mins</option>
              <option value="60">1 hour</option>
              <option value="180">3 hours</option>
            </select>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4"
              onClick={handleReserve}
              disabled={!reservationDuration}
            >
              Reserve
            </button>
          </div>
        ) : (
          <div className="mt-4">
            <p className="mb-4">Reserved from: {new Date(bike.reservationStart).toLocaleString()}</p>
            <p className="mb-4">Reserved until: {new Date(bike.reservationEnd).toLocaleString()}</p>
            {currentUserId === bike.reservedBy ? (
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
                onClick={handleCancelReservation}
              >
                Cancel Reservation
              </button>
            ) : (
              <p className="text-red-500">Bike is already reserved.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BikeModal;
