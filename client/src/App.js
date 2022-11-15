import Navbar from "./components/Navbar";
import AddNewAnnoucement from "./components/pages/AddNewAnnoucement/AddNewAnnoucement";
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from "./components/pages/Home";
import Annoucements from "./components/pages/Annoucements/Annoucements";
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import { useEffect, useState } from "react";

function App() {

    return <>
        <Navbar />
        <div className='container'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/annoucements' element={<Annoucements />} />
                <Route path='/annoucements/add' element={<AddNewAnnoucement />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />

            </Routes>
        </div>
    </>
}

export default App;