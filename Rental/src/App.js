import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Screens/LandingPage.js';
import UserLanding from './Screens/UserLanding.js';
import UserCreate from './Screens/UserCreate.js';
import ManagerLanding from './Screens/ManagerLanding.js';
import UserDashBoard  from "./Screens/UserDashBoard.js"
function App() {
  return (
    <Router>
      <Routes>
          {/* Authentication */}

        <Route path="/" element={<LandingPage />} />
        <Route path="/userLanding" element={<UserLanding />} />
        <Route path="/managerLanding" element={<ManagerLanding />} />
        <Route path='/createUser' element={<UserCreate />} />


        {/* User and Manager Menus */}
        <Route path="/UserDash" element={<UserDashBoard />} />
        

      </Routes>
    </Router>
  );
}

export default App;
