import Navbar1 from './components/Navbar1';
import AddNewAnnoucement from './components/pages/AddNewAnnoucement/AddNewAnnoucement';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Annoucements from './components/pages/Annoucements/Annoucements';
import Register from './components/pages/Register/Register';
import Login from './components/pages/Login/Login';
import UserProfile from './components/pages/UserProfile/UserProfile';
import EditUserProfile from './components/pages/UserProfile/EditUserProfile';
import Annouce from './components/pages/Announce-info/Announce.js';
import Favourites from './components/pages/Favourites/Favourites.js'
import Friends from './components/pages/Friends/Friends';

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
            <Route path="/annoucements/add" element={<AddNewAnnoucement />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/userProfile" element={<UserProfile />} />
            <Route path="/userProfile/edit" element={<EditUserProfile />} />
            <Route path="/announcement/:title" element={<Annouce />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/friends" element={<Friends />} />
          </Routes>
        </div>
      </main>
      <footer>
        <div className="text-center">All rights reserved</div>
      </footer>
    </div>
  );
}

export default App;
