import React from "react";
import { Routes, Route } from "react-router-dom";
import {Company} from "../Pages/Company";
import {Service} from "../Pages/Service";
import { Home } from "../Pages/Home";
import { Register } from "../Pages/Register";
import {Login} from "../Pages/Login";
import PrivateRoute from "./PrivateRoutes";
import {Job} from "../Pages/Job";
import {LoginHover} from "./LoginHover";
// import {Logout} from "../Pages/Logout";

function AllRoutes(){
    return <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/service" element={<PrivateRoute><Service/></PrivateRoute>}/>
            <Route path="/company" element={<PrivateRoute><Company/></PrivateRoute>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/job" element={<PrivateRoute><Job/></PrivateRoute>}/>
            <Route path="/loginHover" element={<LoginHover/>}/>
        </Routes>
    </div>
}
export default AllRoutes;