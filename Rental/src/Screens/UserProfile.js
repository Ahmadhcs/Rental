import React, { useState, useEffect } from 'react';
import axios from 'axios';
import profileImage from "../Images/profile-icon-9.png"
import { useNavigate } from 'react-router-dom';

const UserProfile = ({ userId }) => {
    const [user, setUser] = useState(null);
    const [reviews, setReviews] = useState([]); 
    const token = localStorage.getItem("token")
    const navigate = useNavigate();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8001/api/getUserInfo`, {
                    params:{
                        userID: localStorage.getItem("ID")
                    },
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setUser(response.data.user);
                setReviews(response.data.reviews);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchData();
    }, [userId]);

    if (!user) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-4 flex flex-col items-center">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded focus:outline-none focus:shadow-outline"
                onClick={() => navigate("/userDash")}>
                Go Back
            </button>

            <div className="flex items-center space-x-4">
                <img src={profileImage} alt="Profile" className="h-24 w-24 rounded-full" />
                <div>
                    <h1 className="text-2xl font-bold">{user.firstName} {user.lastName}</h1>
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-semibold">Reviews by {user.firstName}:</h2>
                <div className="space-y-4 mt-4">
                    {reviews.length > 0 ? reviews.map((review, index) => (
                        <div key={index} className="p-4 shadow rounded bg-white">
                            <p className="text-gray-600">{review.text}</p>
                        </div>
                    )) : <p>No reviews found.</p>}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
