import { useNavigate } from "react-router-dom"
const ManagerDash = () =>{
    const navigate = useNavigate()

    const handleLogout = () =>{
        localStorage.removeItem('token');
        localStorage.removeItem('ID');
        
        navigate("/managerLanding")

    }
    return(
        <div className="p-5">
            <div className='flex justify-between items-center w-full'>
                <h1 className="text-2xl font-bold mb-4">Manager Panel</h1>
                <button
                    onClick={handleLogout} 
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                    Logout
                </button>
            </div>
            <div className="grid grid-cols-1 gap-4">
                <button onClick={() => navigate("/ViewUsers")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Edit Users/Managers
                </button>
                <button onClick={() =>  navigate("/ManagerBikes")}  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Edit Bikes
                </button>
                <button onClick={() => navigate("/ReservedUsers")} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    See Users Who Reserved a Bike
                </button>
                <button onClick={() => navigate("/ReservedBikes")} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                    See Bikes Reserved by a User
                </button>
            </div>
    </div>
    )
}

export default ManagerDash