// src/BikeProfile.js
import React, { useState } from 'react';
import BikeModal from './BikeModal.js';

const BikeProfile = ({ bike }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div>
      <div className="bg-white shadow-md rounded p-6 m-4 flex items-center justify-between" onClick={toggleModal}>
        <div>
          <h2 className="text-lg font-bold">{bike.model}</h2>
          <p>Color: {bike.color}</p>
          <p>Location: {bike.location}</p>
          <p>Rating: {bike.rating} / 5</p>
        </div>
        <img src={bike.imageUrl} alt={`${bike.model}`} className="w-24 h-24 rounded-full" />
      </div>
      {showModal && <BikeModal bike={bike} onClose={toggleModal} />}
    </div>
  );
};

export default BikeProfile;