import React from 'react';
import bikeImage from "../Images/profile-icon-9.png"

const UserWithReservedBike = ({ userWithBike }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img className="w-full h-48 object-cover" src={bikeImage} alt="Bike" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{`${userWithBike.user.firstName} ${userWithBike.user.lastName}`}</div>
                <p className="text-gray-700 text-base">Email: {userWithBike.user.email}</p>
                <p className="text-gray-700 text-base">Model: {userWithBike.bikeDetails.model}</p>
                <p className="text-gray-700 text-base">Location: {userWithBike.bikeDetails.location}</p>
                <p className="text-gray-700 text-base">
                    Reserved From: {new Date(userWithBike.bikeDetails.reservationStart).toLocaleDateString()} to
                    {new Date(userWithBike.bikeDetails.reservationEnd).toLocaleDateString()}
                </p>
            </div>
        </div>
    );
};

export default UserWithReservedBike;
