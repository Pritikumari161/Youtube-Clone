import React,{useState} from 'react';
import './Login.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Login = ({setLoginModel}) => {
  const [loginField,setLoginField] = useState({"userName":"","password":""})
  const [loader,setLoader] = useState(false)
  
  function handleOnChangeInput(event,name){
    setLoginField({
      ...loginField,[name]:event.target.value
    })
  }
 const handleLoginFun = async()=>{
 setLoader(true);
  axios.post("http://localhost:4000/auth/login", loginField,{withCredentials:true}).then((res=>{
 setLoader(false);
     localStorage.setItem('token',res.data.token);
    localStorage.setItem('userId',res.data.user._id);
   localStorage.setItem('userProfilePic',res.data.user.profilePic);
    window.location.reload()
  })).catch(err=>{
     toast.error("invalid credencial")
     console.log(err)
  })

 }
 
  return (
    <div className='login'>
        <div className='login_card'>
            <div className='titleCard_login'>
                <YouTubeIcon sx={{fontSize:"56px", color:'red' }} className='login_youtubeImage' />
           Login
            </div>
           <div className='loginCredential'>
            <div className='userNameLogin'>
                <input className='userNameLoginUserName' value={loginField.userName} onChange={(e)=>handleOnChangeInput(e,"userName")} placeholder="userName" type='text'/>
            </div>
                 <div className='userNameLogin'>
                <input className='userNameLoginUserName' value={loginField.password} onChange={(e)=>handleOnChangeInput(e,"password")} placeholder="Password" type='text'/>

            </div>
           </div>
           <div className='login_buttons'>
            <div className='login_btn' onClick={handleLoginFun}>Login</div>
               <Link to={'/signup'} className='login_btn' onClick={()=>setLoginModel()} >SignUp</Link>
                  <div className='login_btn' onClick={()=>setLoginModel()}>Cancel</div>

           </div>
            {loader && <Box sx={{ width: '100%', marginTop:'15px' }}>
                  <LinearProgress />
                     </Box>
}
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Login
