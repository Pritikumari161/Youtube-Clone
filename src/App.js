import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Video from './Pages/Home/Video/Video';
import Profile from './Pages/Profile/Profile';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import VideoUpload from './Pages/UploadVideo/UploadVideo';
import SignUp from './Pages/SignUp/SignUp';
import axios from 'axios'

function App() {
  const [sideNavbar, setSideNavbar] = useState(true);
 

  const setSideNavbarFunc = (value) => {
    setSideNavbar(value);
  };

  return (
    <>
      <Navbar setSideNavbarFunc={setSideNavbarFunc} sideNavbar={sideNavbar} />
      <Routes>
        <Route path="/" element={<Home sideNavbar={sideNavbar} />} />
       <Route path='/watch/:id' element={<Video/>}></Route>
       <Route path='/user/:id' element={<Profile sideNavbar={sideNavbar} />}></Route>

       <Route path='/:id/upload' element={<VideoUpload />}></Route> 
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
    </>
  );
}

export default App;
