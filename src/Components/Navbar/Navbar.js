import React, { useState, useEffect } from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import {Link,useNavigate} from 'react-router-dom';
import Login from '../Login/Login';
import axios from 'axios';


const Navbar = ({ setSideNavbarFunc, sideNavbar }) => {
  const [userPic, setUserPic] = useState('https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-unknown-social-media-user-photo-default-avatar-profile-icon-vector-unknown-social-media-user-184816085.jpg');
  const [navbarModel, setNavbarModel] = useState(false);
  const navigate = useNavigate();
  const [login, setLogin] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleClickModel =()=> {
    setNavbarModel((prev) => !prev);
  };

  const sideNavbarFunc =()=> {
    setSideNavbarFunc(!sideNavbar); // टॉगल करें
  };

  const handleprofile=()=>{
    let userId = localStorage.getItem("userId")
    navigate(`/user/${userId}`);
    setNavbarModel(false)
  }
   const setLoginModel=()=>{
    setLogin(false)
   }

  const onclickOfPopUpOption=(button)=>{
    setNavbarModel(false)
    if(button === 'login'){
      setLogin(true);
    }
    else{
    localStorage.clear();
    getLogoutFun();
    setTimeout(() =>{
      navigate('/')
      window.location.reload();
    }, 2000);
    }
  }
  const getLogoutFun = async()=>{
    axios.post('http://localhost:4000/auth/logout',{},{withCredentials:true}).then((res)=>{
      console.log("Logout")
    }).catch(err=>{
      console.log(err)
    })
  }
  
useEffect(()=>{
  let userProfilePic = localStorage.getItem("userProfilePic")
 setIsLoggedIn(localStorage.getItem('userId')!==null?true:false);
  if(userProfilePic!==null){
    setUserPic(userProfilePic)
  }
},[])

  return (
    <>
      <div className='navbar'>
        <div className='navbar-left'>
          <div className='navbarHamberger' onClick={sideNavbarFunc}>
            <MenuIcon sx={{ color: 'white' }} />
          </div>

          <Link to={'/'} className='navbar_youtubeImg'>
            <YouTubeIcon sx={{ fontSize: '34px' }} className='navbar_youtubeImage' />
            <div className='navbar_youtubeTitle'>YouTube</div>
          </Link>

        </div>
        <div className='navbar_middle'>
          <div className='navbar_Box'>
            <input
              type='text'
              placeholder='Search'
              className='navbar_searchBoxInput'
            />
            <div className='navbar_searchIconBox'>
              <SearchIcon sx={{ fontSize: '28px', color: 'white' }} />
            </div>
            <div className='navbar_mike'>
              <KeyboardVoiceIcon sx={{ color: 'white' }} />
            </div>
          </div>
        </div>
        <div className='navbar_right'>
          <Link to={'/678/upload'}>
          <VideoCallIcon sx={{ fontSize: '30px', cursor: 'pointer', color: 'white' }} />
          </Link>
          <NotificationsActiveIcon sx={{ fontSize: '30px', cursor: 'pointer', color: 'white' }} />
          <img
            onClick={handleClickModel}
            src={userPic}
            className='navbar-right-logo'
            alt='logo'
          />
          {navbarModel && (
            <div className='navbar-modal'>
              {isLoggedIn && <div className='navbar-modal-option' onClick={handleprofile}>Profile</div> }
              {isLoggedIn && <div className='navbar-modal-option' onClick={()=> onclickOfPopUpOption("logout")}>Logout</div>}
             {!isLoggedIn && <div className='navbar-modal-option' onClick={()=> onclickOfPopUpOption("login")}>Login</div>}
            </div>
      
          )}
        </div>
                {
               login && <Login setLoginModel={setLoginModel}/>
      }
    
      </div>
    
    </>
  );
};

export default Navbar;
