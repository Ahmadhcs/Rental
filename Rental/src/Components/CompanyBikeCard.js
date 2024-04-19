import { useState } from "react";
import axios from "axios"
import EditBikeModal from "./EditBikeModal.js";
import bikeImage from "../Images/free-bicycle-icon-1054-thumb.png"

const CompanyBikeCard = ({bike}) =>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const token = localStorage.getItem("ID")

    const handleEdit = async() => {
        setIsEditModalOpen(true);
    }

    const handleDelete = async() =>{
        console.log(bike)
        try{
            const response = await axios.delete(`http://localhost:8001/api/deleteBike?bikeID=${bike._id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

        }catch(error){
            console.log(error)

        }


        toggleModal()
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
        <div onClick={toggleModal} className="cursor-pointer">
            <img className="w-full h-48 object-cover" src={bikeImage} alt={`Bike ${bike.model}`} />
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
                    <button onClick={handleEdit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Edit
                    </button>
                    <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4">
                        Delete
                    </button>
                    <button onClick={toggleModal} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4">
                        Close
                    </button>
                </div>
            </div>
        )}

        {isEditModalOpen && (
                <EditBikeModal 
                    bike={bike} 
                    onClose={() => setIsEditModalOpen(false)} 
                    onSave={(updatedBike) => {
                        console.log(updatedBike);
                        setIsEditModalOpen(false); 
                    }} 
                />
            )}
    </div>
    )

}

export default CompanyBikeCard