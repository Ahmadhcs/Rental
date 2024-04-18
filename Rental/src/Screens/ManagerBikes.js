import React, { useEffect, useState } from "react";
import axios from "axios";
import CompanyBikeCard from "../Components/CompanyBikeCard.js";
import AddBikeModal from "../Components/AddBikeModal.js"; 
import { useNavigate } from 'react-router-dom';

const ManagerBikes = () => {
    const [bikeArray, setBikeArray] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    const openModal = () => {
        setModalOpen(true);
    };

    useEffect(() => {
        const fetchBikes = async () => {
            try {
                const response = await axios.get('http://localhost:8001/api/getCompanyBikes', 
                {
                    params: {
                        managerID: localStorage.getItem("ID")
                    }
                }
                );
                setBikeArray(response.data.bikes); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchBikes();
    }, []);

    return (
        <>
          <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded focus:outline-none focus:shadow-outline"
                onClick={() => navigate("/managerDash")}>
                Go Back
            </button>

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-6 rounded focus:outline-none focus:shadow-outline"
                onClick={openModal}>
                Add Bike
            </button>
            <AddBikeModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
            />
            <div className="flex flex-wrap justify-center">
                    {bikeArray.map((bike) => (
                        <div key={bike._id} className="p-4">
                            <CompanyBikeCard bike={bike} />
                        </div>
                    ))}
</div>
        </>
    );
};

export default ManagerBikes;
