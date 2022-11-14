import Navbar from './components/Navbar';
import AddNewAnnoucement from './components/pages/AddNewAnnoucement/AddNewAnnoucement';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Annoucements from './components/pages/Annoucements/Annoucements';
import Register from './components/pages/Register/Register';
import Login from './components/pages/Login/Login';
import UserProfile from './components/pages/UserProfile/UserProfile';

function App() {
  return (
    <>
      <header>
        <Navbar />
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
          </Routes>
        </div>
      </main>
      <footer>
        <div className="text-center">All rights reserved</div>
      </footer>
    </>
  );
}

export default App;
