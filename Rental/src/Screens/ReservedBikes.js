import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReservedBikeCard from '../Components/ReservedBikeCard.js';
import { useNavigate } from 'react-router-dom';

const ReservedBikes = () => {
    const [reservedBikes, setReservedBikes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchReservedBikes = async () => {
            try {
                const response = await axios.get('http://localhost:8001/api/getReservedBikes');
                setReservedBikes(response.data.bikes);
            } catch (error) {
                console.error('Failed to fetch reserved bikes:', error);
            }
        };

        fetchReservedBikes();
    }, []); 

    return (
        <>
         <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded focus:outline-none focus:shadow-outline"
                onClick={() => navigate("/managerDash")}>
                Go Back
            </button>
            {reservedBikes.length > 0 ? (
                reservedBikes.map((bike) => (
                    <ReservedBikeCard key={bike._id} bike={bike} />
                ))
            ) : (
                <p>No reserved bikes found.</p>
            )}
        </>
    );
};

export default ReservedBikes;