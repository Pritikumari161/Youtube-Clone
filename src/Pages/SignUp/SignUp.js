import React,{useState}  from 'react'
import './SignUp.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import {toast,ToastContainer} from 'react-toastify'

const SignUp = () => {
   const [uploadedImageUrl, setUploadedImageUrl ] = useState("https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-unknown-social-media-user-photo-default-avatar-profile-icon-vector-unknown-social-media-user-184816085.jpg")
  const [signUpField, setSignUpField] = useState({"channelName":"","userName":"","password":"","about":"","profilePic":uploadedImageUrl} )
  const [progress, setProgressBar] = useState(false);
   const navigate = useNavigate();

   const handleInputField=(event,name)=>{
    setSignUpField({
      ...signUpField,[name]:event.target.value
    })
             
}

console.log(signUpField)
const uploadImage= async(e)=>{
  console.log("uploading");
  const files = e.target.files
  const data = new FormData();
  // console.log(files)
  data.append('file',files[0]);
  data.append('upload_preset','youtube-clone');
      
 try{
  // setProgressBar(true);
  
const response = await axios.post("https://api.cloudinary.com/v1_1/dnxorqsvf/image/upload",data)
 //const response = await axios.post("https://res.cloudinary.com/dnxorqsvf/image/upload/v1732001506/cld-sample.jpg",data)
  

  setProgressBar(false);
  const imageUrl = response.data.url;
  console.log(imageUrl);
 setUploadedImageUrl(imageUrl);
 setSignUpField({
      ...signUpField,"profilePic":imageUrl
    })
 }
 catch(err){
  console.log(err)

 }
   }

 const handleSignup = async()=>{
  setProgressBar(true);
 axios.post('http://localhost:4000/auth/signUp',signUpField).then((res) => {
  toast.success(res.data.message)
   setProgressBar(false);
   navigate('/')

 }).catch(err=>{
  console.log(err)
   setProgressBar(false);
   toast.error(err)
 })
 }

  return (
    <div className='signUp'>
        <div className='signup_card'>
           <div className='signUp_title'>
              <YouTubeIcon sx={{fontSize:"56px", color:'red' }} className='login_youtubeImage' />
             SignUp
            </div> 
              <div className='signUp_Inputs'>
                <input type='text' className='signUp_Inputs_inp' value={signUpField.channelName} onChange={(e)=> handleInputField(e,"channelName") } placeholder='Channel Name'/>
                  <input type='text' className='signUp_Inputs_inp' value={signUpField.userName}  onChange={(e)=> handleInputField(e,"userName") } placeholder='User Name'/>
                     <input type='password' className='signUp_Inputs_inp' value={signUpField.password} onChange={(e)=> handleInputField(e,"password") } placeholder='Password'/>
                      <input type='text' className='signUp_Inputs_inp' value={signUpField.about} onChange={(e)=> handleInputField(e,"about") } placeholder='About Your Name'/>
                          
                       <div className='image_upload_signup'>
                          <input onChange={(e)=>uploadImage(e)} type='file'/>
                           
                          <div className='image_upload_signup_div'>
                            <img className='image_default_signup' src={uploadedImageUrl} />
                          </div>
                        
                       </div>
                       <div className='signUpBtns'>
                        <div className='signUpBtn' onClick={handleSignup}> signUp </div>
                             <Link to={'/'} className='signUpBtn' >HomePage </Link>
                       </div>
                       { progress &&<Box sx={{ width: '100%' }}>
                  <LinearProgress />
                     </Box>
}
              </div>
        </div>
       <ToastContainer/>
    </div>
  )
}
export default SignUp