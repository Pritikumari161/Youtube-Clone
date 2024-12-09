import React,{useState,useEffect} from 'react'
import './Video.css';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {toast,ToastContainer} from 'react-toastify';

const Video = () => {
const [message,setMessage] = useState("");
const [data,setData] = useState(null)
const [videoUrl,setVideoUrl] = useState("");
const [comments, setComments] = useState([]);
// console.log(message);
const {id} = useParams();
 
  // console.log(id)

const fetchVideoById = async()=>{
  await axios.get(`http://localhost:4000/api/getVideoById/${id}`)
  .then((res)=>{
    setData(res.data.videos)
  console.log(res.data.videos)
   setVideoUrl(res?.data?.videos?.videoLink)

  
  }).catch(err => {
    console.log(err);
  })
}

 const getCommentByVideoId =async ()=>{
    await axios.get(`http://localhost:4000/commentApi/comment/${id}`).then((responce)=>{
console.log(responce.data.comments)
setComments(responce.data.comments)
    })
  }

useEffect(()=>{
  fetchVideoById();
  getCommentByVideoId();
},[])

const handleComment = async()=>{
  const body = {
    "message":message,
    "video":id
  }
  await axios.post('http://localhost:4000/commentApi/comment',body,{withCredentials:true}).then((res)=>{
    console.log(res)
    const newComment = res.data.comment;
    setComments([newComment,...comments]);
    setMessage("")
  }).catch(err=>{
   toast.error("Please Login First to comment ")

  })

  }


  return (
    <div className='video'>
        <div className='videoPostSection'>
           <div className='video_youtube' >

      {
         data &&  <video width={400}  controls autoPlay className="video_youtube_video" >
             <source src={videoUrl} type='video/mp4'></source> 
              <source src={videoUrl} type='video/webm'></source>
             
               your Browser does not support 
            </video> 
     
           
      }
               
           </div>
        
       <div className='video_youtubeAbout'>
        <div className='video_uTubeTitle'>{data?.title}</div>
        <div className='youtube_video_profileBlock'>
          <div className='youtube_video_profileBlock_left'>
            <Link to={`/user/${data?.user?._id}`} className='youtube_video_profileBlock_left_img'>
             <img  className='youtube_video_profileBlock_left_image' src={data?.user?.profilePic}/>
        </Link>
         <div className='youtubeVideo_subsVies'>
            <div className='youtubePostProfileName'>{data?.user?.channelName}</div>
            <div className='youtubePostProfileSubs'>{data?.user?.createdAt}</div>
         </div>
         <div className='SubscribeBtnYoutube'>Subscribe</div>
        </div>
        <div className='youtube_video_likeBlock'>
            <div className='youtube_video_likeBlock_Like'> 
             <ThumbUpAltOutlinedIcon/>
             <div className='youtube_video_likeBox_NoOfLikes'>{data?.like}</div>
            </div>
              <div className='youtubeVideoDivider'></div>

               <div className='youtube_video_likeBlock_Like'> 
             <ThumbDownOffAltOutlinedIcon/>
            </div>
        </div>
          </div>
        <div className='youtube_video_About'>
            <div>{data?.createdAt.slice(0,10)}</div>
            <div>{data?.description} </div>
        </div>
        </div>
          <div className='youtubeCommentSection'>
            <div className='youtubeCommentTitle'> {comments.length} Comments </div>

            <div className='youtubeSelfComment'>
                <img className='video_youtubeSelfCommentProfile' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdV1uraATO_4qElAD-CjB2i5z1XUWl6RmDww&s' />
                <div className='addAComment'>
                    <input type='text' value={message} onChange={(e)=>{setMessage(e.target.value)} } className='addACommentInput' placeholder='Add a comment'/>
                  <div className='cancelSubmitComment'>
                    <div className='cancelComment'>Cancel</div>
                    <div className='cancelComment' onClick={handleComment} >Comment</div>
                  </div>
                </div>
            </div>

            <div className='youtubeOthersComments'>
              {
                comments.map((item,index)=>{
                     return(
                       <div className='youtubeSelfComment'>
                      <img className='video_youtubeSelfCommentProfile' src={item?.user?.profilePic} />
              <div className='others_commentSection'>
               <div className='others_commentSectionHeader'>
               <div className='channelName_comment'>{item?.user?.channelName}</div>
                    <div className='commentTimingOthers'>{item?.createdAt.slice(0,10)} </div>
               </div>
              <div className='otherSectionSectionComment'>
                {item?.message}
            </div>

               </div>
                </div>
                     );
                })
              }
               
            </div>
          </div>
        </div>
         
        <div className='videoSuggestions'>

           <div className='videoSuggetionsBlock'>
            <div className='video_suggetion_thumbnail'>
               <img className='video_suggetion_thumbnail_img' src='https://media.geeksforgeeks.org/wp-content/uploads/20230427130955/CSS-Tutorial.webp'/>
            </div>
            <div className='video_suggetions_About'>
                <div className='video_suggetions_About_title'> Learn CSS: Create Responsive, Beautiful, & Modern Websites </div>
                <div className='video_suggetions_About_Profile'> Master Modern CSS</div>
                <div className='video_suggetions_About_Profile'>120k views . 1 day age </div>

            </div>
           </div>

              <div className='videoSuggetionsBlock'>
            <div className='video_suggetion_thumbnail'>
               <img className='video_suggetion_thumbnail_img' src='https://media.geeksforgeeks.org/wp-content/uploads/20230427130955/CSS-Tutorial.webp'/>
            </div>
            <div className='video_suggetions_About'>
                <div className='video_suggetions_About_title'> Learn CSS: Create Responsive, Beautiful, & Modern Websites </div>
                <div className='video_suggetions_About_Profile'> Master Modern CSS</div>
                <div className='video_suggetions_About_Profile'>120k views . 1 day age </div>

            </div>
           </div>

   <div className='videoSuggetionsBlock'>
            <div className='video_suggetion_thumbnail'>
               <img className='video_suggetion_thumbnail_img' src='https://media.geeksforgeeks.org/wp-content/uploads/20230427130955/CSS-Tutorial.webp'/>
            </div>
            <div className='video_suggetions_About'>
                <div className='video_suggetions_About_title'> Learn CSS: Create Responsive, Beautiful, & Modern Websites </div>
                <div className='video_suggetions_About_Profile'> Master Modern CSS</div>
                <div className='video_suggetions_About_Profile'>120k views . 1 day age </div>

            </div>
           </div>

           <div className='videoSuggetionsBlock'>
            <div className='video_suggetion_thumbnail'>
               <img className='video_suggetion_thumbnail_img' src='https://media.geeksforgeeks.org/wp-content/uploads/20230427130955/CSS-Tutorial.webp'/>
            </div>
            <div className='video_suggetions_About'>
                <div className='video_suggetions_About_title'> Learn CSS: Create Responsive, Beautiful, & Modern Websites </div>
                <div className='video_suggetions_About_Profile'> Master Modern CSS</div>
                <div className='video_suggetions_About_Profile'>120k views . 1 day age </div>

            </div>
           </div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Video