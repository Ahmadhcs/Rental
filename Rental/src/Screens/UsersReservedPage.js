import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserWithReservedBike from '../Components/UserWithReservedBike.js'; // Make sure the path is correct

const UsersReservedPage = () => {
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
            <h1 className="text-3xl font-bold text-center w-full my-8">Users with Reserved Bikes</h1>
            {usersWithBikes.map((userWithBike, index) => (
                <UserWithReservedBike key={index} userWithBike={userWithBike} />
            ))}
        </div>
    );
};

export default UsersReservedPage;
