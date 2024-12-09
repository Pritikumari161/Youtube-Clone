import React,{useEffect,useState} from 'react';
import './HomePage.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

function HomePage({sideNavbar}) {
const [data, setData] = useState([])

  useEffect(()=>{
axios.get('http://localhost:4000/api/allVideo')
.then(res=>{
   setData(res.data.videos)
  //  console.log(res)
 }).catch(err=>{
console.log(err)
 })
  },[])

const options = ['All','General Knowledge','Facts','Educational Content','News','Entertainment',
  'Business','Health','Safety','Technical','Historical Information','Financial Information','Communication',
  'Communication','Event','Guidance']

  return (
    // ------------------ Options ----------------
    <div className={sideNavbar?'homePage':'fullHomePage'}>
 <div className='homePage_Options'>
     {
      options.map((item, index) =>{
        return(
       <div key={index} className='homePage_Option'> {item} </div>
        )
      })
     }
 </div>

  {/* ------------------ video content  ---------------- */}
     <div className={sideNavbar?'home_mainPage':'home_mainPageWithoutLink'}>
          
          {
            data?.map((item,ind)=>{
              return(
          <Link to={`/watch/${item._id}`} className='youtube_video'>
        <div className='youtube_thumbnailBox'>
         <img src={item.thumbnail} alt='thumbnail' className='youtube_thumbnailPic'/> 
          <img src={item.user?.profilePic} alt='thumbnail' className='youtube_thumbnailPic'/>
          <div className='youtube_timingThumbnail'>
           28:05
          </div>
          </div>
        
        <div className='youtubeTitleBox'>
          <div className='youtubeTitleBoxProfile'>
            <img src={item?.user?.profilePic} alt='profile'  className='youtube_thumbnail_Profile' />
          <div className='youtubeTitleBox_Title'>
            <div className='youtube_videoTitle'>{item?.title}</div>
              <div className='youtube_channelName'>{item?.user?.channelName}</div>
                <div className='youtubeVideo_Views'>{item?.like}likes</div>
          </div>
          </div>
        </div>
      </Link> 
      
              
              )
            })
          }
       
  
      

  {/*  <Link to={'/watch/456'} className='youtube_video'>
        <div className='youtube_thumbnailBox'>
          {/* <img src={item.thumbnail} alt='thumbnail' className='youtube_thumbnailPic'/> */}
           {/* <img src="https://blog.swiggy.com/wp-content/uploads/2024/02/Chole-Bhature-1024x538.jpg" alt='thumbnail' className='youtube_thumbnailPic'/>
          <div className='youtube_timingThumbnail'>
           28:05
          </div>
          </div>
        
        <div className='youtubeTitleBox'>
          <div className='youtubeTitleBoxProfile'>
            <img src="https://www.foodandwine.com/thmb/vWuWODk9iin9AojPiUseJm9JKp4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/HD-200912-r-chocolate-macarons-cd5344aea289447da6036cf7bc9e19ae.jpg" alt='profile'  className='youtube_thumbnail_Profile' />
          <div className='youtubeTitleBox_Title'>
            <div className='youtube_videoTitle'>{"BasicJavascript"}</div>
              <div className='youtube_channelName'>{"CodingHunger"}</div>
                <div className='youtubeVideo_Views'>3likes</div>
          </div>
          </div>
        </div>
      </Link> */} 
    
    
 

     </div>


     </div>

  
  )
}

export default HomePage