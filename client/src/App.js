import Navbar from "./components/Navbar";
import AddNewAnnoucement from "./components/pages/AddNewAnnoucement/AddNewAnnoucement";
import { Route, Routes } from 'react-router-dom';
import Home from "./components/pages/Home";
import Annoucements from "./components/pages/Annoucements/Annoucements";
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import { useState, useMemo, useEffect, createContext } from "react";
import { getProfile, tokenIsValid } from './service/userService.js'
import UserProfile from "./components/pages/UserProfile/UserProfile";

export const UserContext = createContext();
function App() {
    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined,
    })

    useEffect(() => {
        const isLoggedIn = async () => {
            let token = localStorage.getItem("token")
            if (token == null) {
                localStorage.setItem("token", "")
                token = ""
            }

            const tokenResponse = tokenIsValid(token);
            tokenResponse.then((res) => {
                if (res.data) {
                    const userResponse = getProfile(token);
                    userResponse.then((res) => {
                        setUserData({
                            token: token,
                            data: res.data
                        })
                    })
                }
            }).catch((err) => {
                console.log(err);
            }
            )
        }
        isLoggedIn();
    }, [])

    return <>
        <UserContext.Provider value={{ userData, setUserData }}>
            <header>  
            <Navbar />
            </header>
            <main>
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/annoucements' element={<Annoucements />} />
                    <Route path='/annoucements/add' element={<AddNewAnnoucement />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/userProfile' element={<UserProfile/>} />
                </Routes>
            </div>
            </main>
            <footer><div className="text-center">All rights reserved</div></footer>
        </UserContext.Provider>
    </>
}

export default App;