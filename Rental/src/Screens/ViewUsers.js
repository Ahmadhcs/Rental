import axios from "axios"
import { useEffect, useState } from "react"
import UserProfile from "../Components/UserProfile.js"
const ViewUsers = ( )  => {

    const [usersArray, setUsersArray] = useState([])
    const [managersArray, setManagersArray] = useState([])
    const token = localStorage.getItem("ID")


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8001/api/getUsers', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setUsersArray(response.data.users); 
                setManagersArray(response.data.managers)
                console.log(response.data.users)
            
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
  
        fetchUsers();
      }, []);
    
    return (
        <>
            <div className="text-center text-2xl font-semibold my-6">
                App Users
            </div>
            <div className="flex flex-wrap -mx-2">
                {usersArray.map((user) => {
                    return (
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                            <UserProfile user={user} />
                        </div>
                    );
                })}
            </div>

            <div className="text-center text-2xl font-semibold my-6">
                App Managers
            </div>
            <div className="flex flex-wrap -mx-2">
                {managersArray.map((manager) => {
                    return (
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                            <UserProfile user={manager} />
                        </div>
                    );
                })}
            </div>
        </>

    )
}



export default ViewUsers