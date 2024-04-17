import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BikeProfile from '../Components/BikeProfile.js';
import axios from "axios"

const UserDashBoard = () =>{
    const navigate = useNavigate();
    const [bikeArray, setBikeArray] = useState([])




    useEffect(() => {
      const fetchBikes = async () => {
          try {
              const response = await axios.get('http://localhost:8001/api/getAllBikes');
              setBikeArray(response.data.bikes); 
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      fetchBikes();
    }, []);



    return (
        <div className="p-8">
          <h1 className="font-bold text-2xl mb-4">Bike Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {bikeArray.map(bike => (
              <BikeProfile key={bike.id} bike={bike} />
            ))}
          </div>
        </div>
      );
}


export default UserDashBoard