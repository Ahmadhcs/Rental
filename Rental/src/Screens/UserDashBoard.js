import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BikeProfile from '../Components/BikeProfile.js'; 
import { useNavigate } from 'react-router-dom';

const BikeDashboard = () => {
  const navigate = useNavigate();
  const [bikeArray, setBikeArray] = useState([]);
  const [filteredBikes, setFilteredBikes] = useState([]);
  const [filters, setFilters] = useState({
    color: '',
    model: '',
    location: ''
  });

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        const response = await axios.get('http://localhost:8001/api/getAllBikes');
        setBikeArray(response.data.bikes);
        setFilteredBikes(response.data.bikes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchBikes();
  }, []);

  const uniqueModels = [...new Set(bikeArray.map(bike => bike.model))];
  const uniqueLocations = [...new Set(bikeArray.map(bike => bike.location))];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
  
    setFilters(prev => ({ ...prev, [name]: value }));
  
    setFilteredBikes(bikeArray.filter(bike =>
      (name !== 'color' || value === '' || bike.color === value) &&
      (name !== 'model' || value === '' || bike.model === value) &&
      (name !== 'location' || value === '' || bike.location === value)
    ));
  };

  const handleLogout = () =>{
    localStorage.removeItem('ID'); 
    localStorage.removeItem('token'); 
    navigate('/');
  }

  return (
    <div className="p-8">
      <div className='flex justify-between items-center w-full'>
          <h1 className="font-bold text-2xl mb-4">Bike Dashboard</h1>
          <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
              Logout
          </button>
      </div>
      <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-3  rounded focus:outline-none focus:shadow-outline"
                onClick={() => navigate("/userProfile")}>
                Profile
            </button>
      <div className="mb-4 flex flex-col md:flex-row md:items-end md:space-x-2">
        <div>
          <select
            id="color-filter"
            name="color"
            value={filters.color}
            onChange={handleFilterChange}
            className="text-sm rounded-lg border border-gray-300"
          >
            <option value="">All Colors</option>
            {uniqueModels.map(color => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>
        </div>
        <div>
          <select
            id="model-filter"
            name="model"
            value={filters.model}
            onChange={handleFilterChange}
            className="text-sm rounded-lg border border-gray-300"
          >
            <option value="">All Models</option>
            {uniqueModels.map(model => (
              <option key={model} value={model}>{model}</option>
            ))}
          </select>
        </div>
        <div>
          <select
            id="location-filter"
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
            className="text-sm rounded-lg border border-gray-300"
          >
            <option value="">All Locations</option>
            {uniqueLocations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredBikes.map(bike => (
          <BikeProfile key={bike.id} bike={bike} />
        ))}
      </div>
    </div>
  );
};

export default BikeDashboard;
