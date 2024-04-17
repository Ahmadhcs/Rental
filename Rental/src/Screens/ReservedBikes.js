import ReservedBikeCard from "../Components/ReservedBikeCard.js"
import { useEffect, useState} from "react";
import axios from "axios"
const ReservedBikes = () =>{
    const [reservedBikes, setReservedBikes] = useState([])
    // setReservedBikes([
    //     {
    //         _id: '1',
    //         model: 'AWD Mountain',
    //         color: 'Black',
    //         location: 'Downtown',
    //         imageUrl: '/path/to/image.jpg', // Replace with your image path
    //         reservedBy: 'John Doe',
    //         reservationDuration: 120, // Duration in minutes
    //     },
    //     // ... more bikes
    // ])

    // useEffect(() => {
    //     const fetchReservedBikes = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:8001/api/getReservedBikes');
    //             setReservedBikes(response.data.reservedBikes); 
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
  
    //     fetchReservedBikes();
    //   }, []);


    return(
            <>
             {reservedBikes.map((bike) => (
                <ReservedBikeCard bike={bike} />
            ))}
            <ReservedBikeCard bike={
        {
            _id: '1',
            model: 'AWD Mountain',
            color: 'Black',
            location: 'Downtown',
            imageUrl: '/path/to/image.jpg', // Replace with your image path
            reservedBy: 'John Doe',
            reservationDuration: 120, // Duration in minutes
        }
    } />
        <ReservedBikeCard bike={
        {
            _id: '1',
            model: 'AWD Mountain',
            color: 'Black',
            location: 'Downtown',
            imageUrl: '/path/to/image.jpg', // Replace with your image path
            reservedBy: 'John Doe',
            reservationDuration: 120, // Duration in minutes
        }
    } />    <ReservedBikeCard bike={
        {
            _id: '1',
            model: 'AWD Mountain',
            color: 'Black',
            location: 'Downtown',
            imageUrl: '/path/to/image.jpg', // Replace with your image path
            reservedBy: 'John Doe',
            reservationDuration: 120, // Duration in minutes
        }
    } />
            </>
    )

}



export default ReservedBikes