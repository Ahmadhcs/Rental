import React from 'react';

const ReservedBikeCard = ({ bike }) => {
    const formatDuration = (duration) => {
        // Assuming duration is in minutes
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return `${hours}h ${minutes}m left`;
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white my-4 mx-auto">
            <img className="w-full h-48 object-cover" src={bike.imageUrl} alt={`Bike ${bike.model}`} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{bike.model}</div>
                <p className="text-gray-700 text-base">
                    Color: {bike.color}
                </p>
                <p className="text-gray-700 text-base">
                    Location: {bike.location}
                </p>
                <p className={`text-base ${bike.reservationDuration ? 'text-green-500' : 'text-red-500'}`}>
                    {bike.reservationDuration ? `Reserved by ${bike.reservedBy}` : 'Available'}
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