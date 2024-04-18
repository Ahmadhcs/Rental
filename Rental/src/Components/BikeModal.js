import React, { useState } from 'react';
import axios from 'axios';

const BikeModal = ({ bike, onClose }) => {
  const [reserved, setReserved] = useState(bike.isReserved);
  const [reservationDuration, setReservationDuration] = useState('');
  const [rating, setRating] = useState(bike.rating);
  const [review, setReview] = useState('');
  const [showReviewModal, setShowReviewModal] = useState(false);

  const currentUserId = localStorage.getItem('ID');  
  console.log(currentUserId)

  const handleReviewSubmit = async () => {
    try {
      // Placeholder for review submission logic
      alert('Review submitted: ' + review);
      setShowReviewModal(false); // Close modal on successful submission
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Error submitting review.');
    }
  };

  const handleReserve = async () => {
    const reservationStart = new Date(); 
    const reservationEnd = new Date(reservationStart.getTime() + parseInt(reservationDuration) * 60000);

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
        onClose(); 
      }
    } catch (error) {
      console.error('Error reserving bike:', error);
      alert('Error reserving bike.');
    }
  };

  const handleRate = async() =>{

    try{
      const response = await axios.post("http://localhost:8001/api/rateBike", {
        userID: localStorage.getItem("ID"), 
        bikeID: bike._id,
        rating
      })


    }catch(error){

    }

  }

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };


  const handleCancelReservation = async () => {
    try {
      const response = await axios.delete(`http://localhost:8001/api/cancelReserve?bikeID=${bike._id}&userID=${currentUserId}`);
      
      if (response.status === 200) {
        alert('Reservation cancelled successfully!');
        setReserved(false);
        onClose(); 
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
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleRate}>
              Rate
            </button>
        </div>

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
        <div className="mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4"
          onClick={() => setShowReviewModal(true)}
        >
          Review
        </button>

        {showReviewModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg space-y-4">
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Write your review here..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
              ></textarea>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-4 rounded"
                onClick={handleReviewSubmit}
              >
                Submit Review
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setShowReviewModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default BikeModal;
