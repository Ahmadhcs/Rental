import axios from "axios"
import { useEffect } from "react";
import CompanyBikeCard from "../Components/CompanyBikeCard.js";
const ManagerBikes = () =>{

    useEffect(() => {
        // Define the function that fetches data
        const fetchBikes = async () => {
            try {
                const response = await fetch('http://localhost:8001/api/getCompanyBikes');
                const data = await response.json();
                console.log(data); 
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchBikes();
    }, []);



    return (
        <>

        {/* {data.bikes.map(bike) =>{
            <CompanyBikeCard bike={bike} />
        }

        } */}
         

        </>

    )
}

export default ManagerBikes