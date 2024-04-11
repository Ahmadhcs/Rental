import { useNavigate } from 'react-router-dom';
import BikeProfile from '../Components/BikeProfile.js';

const bikes = [
    { id: 1, model: 'Mountain X1', color: 'Red', location: 'Berlin', rating: 4.5 },
    { id: 2, model: 'Speedster Z3', color: 'Blue', location: 'San Francisco', rating: 4.8 },
  ];

const UserDashBoard = () =>{
    const navigate = useNavigate();


    return (
        <div className="p-8">
          <h1 className="font-bold text-2xl mb-4">Bike Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {bikes.map(bike => (
              <BikeProfile key={bike.id} bike={bike} />
            ))}
          </div>
        </div>
      );
}


export default UserDashBoard