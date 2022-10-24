import React from 'react'
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './pages/dashboard/Dashboard.page';
import './App.css';
import {Entry} from './pages/entry/Entry.page';
import { AnnouncementLists } from './pages/announcement-list/AnnouncementList.page';
import {AddAnnoucement} from './pages/new-announcement/AddAnnouncement.page';
import { Registration } from './pages/registration/Registration.page';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className='App'>

      <Router>
        <Routes>
            <Route exact path="/" element={<Entry />} />
            <Route exact path="/registration" element={<Registration />} />
            <Route path="/dashboard" element={<DefaultLayout><Dashboard/></DefaultLayout>} />
            <Route path="/announcements" element={<DefaultLayout><AnnouncementLists/></DefaultLayout>} />
            <Route path="/add" element={<DefaultLayout><AddAnnoucement/></DefaultLayout>} />

        
        
        </Routes>
      </Router>
    
    </div>
  );
}

export default App