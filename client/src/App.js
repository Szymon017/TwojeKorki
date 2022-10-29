import React from 'react'
import { DefaultLayout } from './layout/DefaultLayout';
//import { Dashboard } from './pages/dashboard/Dashboard.page';
import './App.css';
//import {Entry} from './pages/entry/Entry.page';
//import { AnnouncementLists } from './pages/announcement-list/AnnouncementList.page';
import {AddAnnoucement} from './pages/new-announcement/AddAnnouncement.page';

function App() {
  return (
    <div>
    {/*<Entry/>*/}


    <DefaultLayout>
        {/*<Dashboard/>*/}
        <AddAnnoucement/>
        {/*<AnnouncementLists/>*/}
    </DefaultLayout>

    </div>
  )
}

export default App