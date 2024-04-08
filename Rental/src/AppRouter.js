import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "./Screens/LandingPage";


function AppRouter() {

    return(
        <Routes>
            <Route path='/' element={<LandingPage />}/>

        </Routes>

    );
}


export default AppRouter;
