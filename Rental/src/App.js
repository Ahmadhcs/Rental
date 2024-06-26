import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Screens/LandingPage.js';
import UserLanding from './Screens/UserLanding.js';
import UserCreate from './Screens/UserCreate.js';
import ManagerLanding from './Screens/ManagerLanding.js';
import ManagerCreate from './Screens/ManagerCreate.js';
import UserDashBoard  from "./Screens/UserDashBoard.js"
import ManagerBikes from './Screens/ManagerBikes.js';
import ManagerDash from './Screens/ManagerDash.js';
import ReservedBikes from './Screens/ReservedBikes.js';
import ViewUsers from './Screens/ViewUsers.js';
import UsersReservedPage from './Screens/UsersReservedPage.js';
import UserProfile from './Screens/UserProfile.js';
import ProtectedRoute from './Components/ProtectedRoute.js';
function App() {
  return (
    <Router>
      <Routes>
          {/* Authentication */}

        <Route path="/" element={<LandingPage />} />
        <Route path="/userLanding" element={<UserLanding />} />
        <Route path="/managerLanding" element={<ManagerLanding />} />
        <Route path='/createUser' element={<UserCreate />} />
        <Route path='/createManager' element={<ManagerCreate />} />



        {/* User and Manager Menus */}
        <Route 
          path="/UserDash" 
          element={
            <ProtectedRoute>
              <UserDashBoard />
            </ProtectedRoute>
          } 
        />
        
        
        {/* Protected Routes */}
        <Route 
          path="/ManagerDash" 
          element={
            <ProtectedRoute>
              <ManagerDash />
            </ProtectedRoute>
          } 
        />
        <Route 
          path='/ManagerBikes' 
          element={
            <ProtectedRoute>
              <ManagerBikes />
            </ProtectedRoute>
          } 
        /> 
        <Route 
          path='/ReservedBikes' 
          element={
            <ProtectedRoute>
              <ReservedBikes />
            </ProtectedRoute>
          } 
        /> 
        <Route 
          path="/ViewUsers" 
          element={
            <ProtectedRoute>
              <ViewUsers />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/ReservedUsers" 
          element={
            <ProtectedRoute>
              <UsersReservedPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/UserProfile" 
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          } 
        />



        

      </Routes>
    </Router>
  );
}

export default App;
