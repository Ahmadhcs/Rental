import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Screens/LandingPage.js';
import UserLanding from './Screens/UserLanding.js';
import ManagerLanding from './Screens/ManagerLanding.js';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/userLanding" element={<UserLanding />} />
        <Route path="/managerLanding" element={<ManagerLanding />} />

      </Routes>
    </Router>
  );
}

export default App;
