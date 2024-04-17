// EditBikeModal.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditBikeModal = ({ bike, onClose, onSave }) => {
    const [editData, setEditData] = useState({
        model: '',
        color: '',
        location: ''
        // Add other fields as necessary
    });


    useEffect(() => {
        if (bike) {
            setEditData({
                model: bike.model,
                color: bike.color,
                location: bike.location
            });
        }
    }, [bike]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData({
            ...editData,
            [name]: value
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.put(`http://localhost:8001/api/editBike`, {
                editData,
                bikeID: bike._id
            });
            onSave(response.data); 
            onClose(); 
        } catch (error) {
            console.error('Error updating bike:', error);
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg shadow-xl">
                <h2 className="text-xl font-bold mb-4">Edit Bike</h2>
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                    <div>
                        <label>Model:</label>
                        <input type="text" name="model" value={editData.model} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label>Color:</label>
                        <input type="text" name="color" value={editData.color} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label>Location:</label>
                        <input type="text" name="location" value={editData.location} onChange={handleInputChange} />
                    </div>
                    <div className="flex justify-end mt-4">
                        <button type="button" onClick={onClose} className="mr-2">Cancel</button>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditBikeModal;
