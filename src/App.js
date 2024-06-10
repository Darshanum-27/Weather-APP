import React from 'react'
import LoginPage from './Components/LoginPage';
import { HashRouter, Route, Routes } from 'react-router-dom';
import DataPage from './Components/DataPage';
import { useState } from 'react';

function App() {
  let [latitude,setLatitude] = useState(0);
  let [longitude,setlongitude] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
            <Routes>
                    <Route exact index element={<LoginPage setLatitude={setLatitude} setlongitude={setlongitude}/>} />
                    <Route exact path="/Display" element={<DataPage latitude={latitude} longitude={longitude}></DataPage>} />
                    <Route exact path="/" element={<LoginPage setLatitude={setLatitude} setlongitude={setlongitude}/>}/>
            </Routes> 
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
