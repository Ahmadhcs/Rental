import React from 'react';
import bikeImage from "../Images/free-bicycle-icon-1054-thumb.png"

const ReservedBikeCard = ({ bike }) => {
    const formatDuration = (duration) => {
        // Assuming duration is in minutes
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return `${hours}h ${minutes}m left`;
    };

    console.log(bike)
    


    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white my-4 mx-auto">
            <img className="w-full h-48 object-cover" src={bikeImage} alt={`Bike ${bike.model}`} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{bike.model}</div>
                <p className="text-gray-700 text-base">
                    Color: {bike.color}
                </p>
                <p className="text-gray-700 text-base">
                    Location: {bike.location}
                </p>
                <p className={`text-base text-red-500`}>
                    Reserved by {bike.reservedBy}
                </p>
                {bike.reservationDuration && (
                    <p className="text-gray-700 text-base">
                        Duration: {formatDuration(bike.reservationDuration)}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ReservedBikeCard;