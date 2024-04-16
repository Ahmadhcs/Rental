import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const ManagerCreate = () =>{
    const navigate = useNavigate();

    // Local state for the account creation form
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleCreateAccount = async (event) => {
      event.preventDefault();
  
      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }
  
      try {
  
  
      const response = await axios.post("http://localhost:8001/api/managerSignUp", 
      {
          firstName, 
          lastName, 
          email, 
          password
      })
  
  
        if (response.status === 200 || response.status === 201) {
          alert("Account created successfully!");
          navigate("/ManagerDash"); 
        } else {
          console.error("API call failed:", response);
          alert("Account creation failed.");
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred during account creation.");
      }
    };
    

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Create Account</h1>
        <form onSubmit={handleCreateAccount} className="space-y-6">
          <div>
            <label htmlFor="firstName" className="text-sm font-medium text-gray-700 block mb-2">First Name</label>
            <input
              type="text"
              id="firstName"
              className="w-full px-4 py-2 border rounded-md text-lg"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="text-sm font-medium text-gray-700 block mb-2">Last Name</label>
            <input
              type="text"
              id="lastName"
              className="w-full px-4 py-2 border rounded-md text-lg"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              required
            />
          </div>
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
          <div>
            <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 block mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2 border rounded-md text-lg"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Create Account
          </button>
        </form>
        <div className="mt-6 text-center">
          <button
            onClick={handleCreateAccount}
            className="text-blue-600 hover:underline"
          >
            Already have an account? Log in
          </button>
        </div>
      </div>
    </div>
        

    )
}

export default ManagerCreate