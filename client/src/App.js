import React from 'react'
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './pages/dashboard/Dashboard.page';
import './App.css';



function App() {
  return (
    <div>
    {/*<Entry/>*/}

    <DefaultLayout>
        <Dashboard/>
    </DefaultLayout>
    </div>
  )
}

export default App