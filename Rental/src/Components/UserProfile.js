import React from 'react';
import userImage from '../Images/profile-icon-9.png';

const UserProfile = ({ user }) => {
    console.log(user)
    return (
        <div className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg">
            <div className="text-xl font-semibold">
                {user.firstName} {user.lastName}
            </div>
            <img src={userImage} alt="User" className="w-24 h-24 rounded-full my-3" />
            <div className="text-gray-600">{user.email}</div>
        </div>
    );
};

export default UserProfile;
