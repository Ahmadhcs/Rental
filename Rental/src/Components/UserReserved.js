import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsersWithReservedBikes = () => {
    const [usersWithBikes, setUsersWithBikes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8001/api/getUsersReserved');
                setUsersWithBikes(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-wrap justify-center items-center p-4">
            {usersWithBikes.map((userWithBike, index) => (
                <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                    <img className="w-full h-48 object-cover" src={userWithBike.bikeDetails.imageUrl || 'path_to_default_image.jpg'} alt="Bike" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{`${userWithBike.user.firstName} ${userWithBike.user.lastName}`}</div>
                        <p className="text-gray-700 text-base">
                            Email: {userWithBike.user.email}
                        </p>
                        <p className="text-gray-700 text-base">
                            Bike Model: {userWithBike.bikeDetails.model}
                        </p>
                        <p className="text-gray-700 text-base">
                            Location: {userWithBike.bikeDetails.location}
                        </p>
                        <p className="text-gray-700 text-base">
                            Reserved From: {new Date(userWithBike.bikeDetails.reservationStart).toLocaleDateString()} to
                            {new Date(userWithBike.bikeDetails.reservationEnd).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UsersWithReservedBikes;
