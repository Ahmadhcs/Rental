import { useState } from "react";

const CompanyBikeCard = ({bike}) =>{
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
        <div onClick={toggleModal} className="cursor-pointer">
            <img className="w-full h-48 object-cover" src={bike.imageUrl} alt={`Bike ${bike.model}`} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{bike.model}</div>
                <p className="text-gray-700 text-base">
                    Color: {bike.color}
                </p>
                <p className="text-gray-700 text-base">
                    Location: {bike.location}
                </p>
                <p className="text-gray-700 text-base">
                    Rating: {bike.rating} / 5
                </p>
                <p className="text-gray-700 text-base">
                    Availability: {bike.availability ? 'Available' : 'Unavailable'}
                </p>
            </div>
        </div>
        {isModalOpen && (
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-5 rounded">
                    <h2 className="text-xl font-bold mb-4">Manage Bike</h2>
                    <button onClick={toggleModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Edit
                    </button>
                    <button onClick={toggleModal} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4">
                        Delete
                    </button>
                    <button onClick={toggleModal} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4">
                        Close
                    </button>
                </div>
            </div>
        )}
    </div>
    )

}

export default CompanyBikeCard