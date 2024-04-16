import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const ManagerLanding = () =>{
  const navigate = useNavigate();

  // Local state for login form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(email, password);
    try{
      const response = await axios.post("http://localhost:8001/api/managerSignIn", {
        email,
        password
      })

      console.log(response)



      if (response.status === 200) {
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("ID", response.data.manager._id)
        navigate("/ManagerDash")
      } else {
        console.error("API call failed:", response);
        alert("Submission failed.");
      }




    }catch (error){
      console.log(error)
    }
    // navigate('/dashboard');
  };


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Manager Login</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md text-lg"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700 block mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-md text-lg"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <button
            type="submit"
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Log in
          </button>
        </form>
        <div className="mt-6 text-center">
          <button
          onClick={() => navigate("/managerDash")}
            className="text-blue-600 hover:underline"
          >
            Create an account
          </button>
        </div>
      </div>
    </div>
  );
}


export default ManagerLanding; 