import axios from "axios"
import { useEffect, useState } from "react"
import UserProfile from "../Components/UserProfile.js"
const ViewUsers = ( )  => {

    const [usersArray, setUsersArray] = useState([])
    const [managersArray, setManagersArray] = useState([])


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8001/api/getUsers');
                setUsersArray(response.data.users); 
                setManagersArray(response.data.managersArray)
                console.log(response.data.users)
            
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
  
        fetchUsers();
      }, []);
    
    return (
        <>
        {usersArray.map((user) =>{
            <UserProfile user={user} />
        })

        }

        </>
    )
}



export default ViewUsers