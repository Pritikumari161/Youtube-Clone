
import React,{useState,useEffect} from 'react';
import './UploadVideo.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Form,Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
 import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const UploadVideo = () =>{
const [inputField, setInputField] = useState({"title":"","description":"","videoLink":"","thumbnail":"","videoType":""})
const [loader, setLoader] =useState(false)
const navigate = useNavigate()

const handleOnChangeInput = (event,name)=>{
  setInputField({
    ...inputField,[name]:event.target.value
  })
}


const uploadImage= async(e,type)=>{
  setLoader(true);
  console.log("uploading");
  const files = e.target.files
  const data = new FormData();
  // console.log(files)
  data.append('file',files[0]);
  data.append('upload_preset','youtube-clone');
      
 try{
  // setProgressBar(true);
  
const response = await axios.post(`https://api.cloudinary.com/v1_1/dnxorqsvf/${type}/upload`,data)
 //const response = await axios.post("https://res.cloudinary.com/dnxorqsvf/image/upload/v1732001506/cld-sample.jpg",data)
  const url = response.data.url;
  setLoader(false);
  let val = type==="image"?"thumbnail":"videoLink";
 console.log(url)
//   setProgressBar(false);
//   const imageUrl = response.data.url;
//   console.log(imageUrl);
//  setUploadedImageUrl(imageUrl);
 setInputField({
    ...inputField,[val]:url
  })
 }
 catch(err){
  setLoader(false);
  console.log(err)

 }
   }
console.log(inputField)

useEffect(()=>{
let isLogin = localStorage.getItem("userId");
if(isLogin===null){
  navigate('/')
}
},[])

const handleSubmitFunc = async()=>{
  setLoader(true)
  await axios.post('http://localhost:4000/api/video',inputField,{withCredentials:true})
  .then((resp)=>{
    console.log(resp)
    setInputField(false)
    navigate('/')
  }).catch(err=>{
     setInputField(false)
    console.log(err)
  })

  }


  return(
    <div className='videoUpload'>
      <div className='uploadBox'>
        <div className='uploadVideoTitle'>
         <YouTubeIcon sx={{fontSize:" 54px", color:"red" }} />
         upload video
        </div>
     <div className='uploadForm'>
      <input type="text" value={inputField.title} onChange={(e)=>handleOnChangeInput(e,'title')} placeholder='Title' className='uploadFormInputs'/>
       <input type="text" value={inputField.description} onChange={(e)=>handleOnChangeInput(e,'description')} placeholder='description' className='uploadFormInputs'/>
      <input type="text" value={inputField.videoType} onChange={(e)=>handleOnChangeInput(e,'videoType')} placeholder='Category' className='uploadFormInputs'/>
      <div > Thumbnail <input type='file' accept='image/*'  onChange={(e)=>uploadImage(e,"image")}  /></div>
      <div > Video<input type='file' accept='video/mp4, video/webm video/*' onChange={(e)=>uploadImage(e,"video")} /></div>
    
      {loader &&<Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
}
    
     </div>

         <div className='uploadBtns'>
          <div className='uploadBtn-form' onClick={handleSubmitFunc}>Upload</div>
          <Link to={'/'} className='uploadBtn-form'>Home</Link>
         </div>

      </div>


    </div>
  )
}
export default UploadVideo