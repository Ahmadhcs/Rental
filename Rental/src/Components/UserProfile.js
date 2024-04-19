import React from 'react';
import userImage from '../Images/profile-icon-9.png';
import axios from "axios"

const UserProfile = ({ user }) => {
    const token = localStorage.getItem("ID")

    const handleDelete = async() =>{
        try{
            await axios.delete(`http://localhost:8001/api/deleteUser?userID=${user._id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

        }catch{

            console.log("Error")

        }
    }
    return (
        <div className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg">
        <div className="text-xl font-semibold">
            {user.firstName} {user.lastName}
        </div>
        <img src={userImage} alt="User" className="w-24 h-24 rounded-full my-3" />
        <div className="text-gray-600 mb-4">{user.email}</div>
        <div className="flex gap-4">
            <button
                className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                onClick={() => { /* handle edit functionality */ }}
            >
                Edit
            </button>
            <button
                className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded hover:bg-red-700 focus:outline-none focus:bg-red-700"
                onClick={() => handleDelete()}
            >
                Delete
            </button>
        </div>
    </div>
    
    );
};

export default UserProfile;
