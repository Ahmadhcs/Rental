import React, { useState, useEffect } from 'react';
import axios from "axios"

const AddBikeModal = ({ isOpen, onClose }) => {
    const [model, setModel] = useState('');
    const [color, setColor] = useState('');
    const [location, setLocation] = useState('');


    if (!isOpen) return null;

    const handleSave = async() => {
        try{
            const response = await axios.post("http://localhost:8001/api/addBike", {
                companyID: localStorage.getItem("ID"), 
                model, 
                color, 
                location

            })


        }catch(error){

        }
        console.log({ model, color, location });
        onClose(); 
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div className="mt-3 text-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Add/Edit Bike</h3>
                    <div className="mt-2 px-7 py-3">
                        <input
                            className="text-sm text-gray-900 border rounded py-2 px-3 w-full"
                            placeholder="Model"
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                        />
                        <input
                            className="text-sm text-gray-900 border rounded py-2 px-3 w-full mt-2"
                            placeholder="Color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        />
                        <input
                            className="text-sm text-gray-900 border rounded py-2 px-3 w-full mt-2"
                            placeholder="Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <div className="items-center px-4 py-3">
                        <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                            Save
                        </button>
                        <button onClick={onClose} className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 mt-2">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBikeModal;
