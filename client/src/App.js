import Navbar1 from './components/Navbar1';
import AddNewAnnoucement from './components/pages/AddNewAnnoucement/AddNewAnnoucement';
import { Route, Routes, Outlet, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import Annoucements from './components/pages/Annoucements/Annoucements';
import Register from './components/pages/Register/Register';
import Login from './components/pages/Login/Login';
import UserProfile from './components/pages/UserProfile/UserProfile';
import EditUserProfile from './components/pages/UserProfile/EditUserProfile';
import Annouce from './components/pages/Announce-info/Announce.js';
import Favourites from './components/pages/Favourites/Favourites.js';
import Friends from './components/pages/Friends/Friends';
import UserGuestProfile from './components/pages/UserGuestProfile/UserGuestProfile';
import AdminPanel from './components/pages/AdminPanel/AdminPanel';
import { getCurrentUser } from './service/userDataService';
import Messages from './components/pages/Messages/Messages';
import EditAnnoucement from './components/pages/EditAnnoucement/EditAnnoucement';

function App() {
  return (
    <div className="d-flex flex-column site-container">
      <header>
        <Navbar1 />
      </header>
      <main>
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/annoucements" element={<Annoucements />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/announcement/:_id" element={<Annouce />} />
            <Route path="/userGuestProfil/:_id" element={<UserGuestProfile />}/>
            <Route element={<RoleAccess roles={["user", "mod", "admin"]} />}>
              <Route path="/annoucements/add" element={<AddNewAnnoucement />} />
              <Route path="/userProfile/edit" element={<EditUserProfile />} />
              <Route path="/annoucements/edit/:id" element={<EditAnnoucement />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/userProfile" element={<UserProfile />} />
              <Route path="/messages" element={<Messages />} />
            </Route>
            <Route element={<RoleAccess roles={["admin"]} />}>
              <Route path="/adminPanel" element={<AdminPanel/>} />
            </Route>
          </Routes>
        </div>
      </main>
      <footer>
        <div className="text-center">All rights reserved</div>
      </footer>
    </div>
  );
}

const RoleAccess = ({ roles = [] }) => {
  if(localStorage.getItem("token")){
    const user = getCurrentUser();
    
    return !roles.length || roles.includes(user?.role)
    ? <Outlet />
    : <Navigate to="/" replace />;
  }else{
    return <Navigate to="/login" replace />;
  }
};

export default App;
