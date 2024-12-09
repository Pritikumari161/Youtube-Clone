import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import VideocamIcon from '@mui/icons-material/Videocam';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import HomePage from '../HomePage/HomePage';
import './SideNavbar.css'


const SideNavbar = ({sideNavbar}) => {
  return (

    // -----------------TOP SideNavbar  ----------
    <div className={sideNavbar?'home-sideNavbar':'homeSideNavabarHide'}>
        <div className='home_sideNavbarTop'>
     <div className={'home_sideNavbar_TopOption'}>
          <HomeIcon/>
     <div className='home_sideNavbarTopOptionTitle'>Home</div>
     </div>
     <div className={'home_sideNavbar_TopOption'}>
          <VideocamIcon/>
     <div className='home_sideNavbarTopOptionTitle'>Shorts</div>
     </div>
       <div className={'home_sideNavbar_TopOption'}>
          <SubscriptionsIcon/>
     <div className='home_sideNavbarTopOptionTitle'>Subscriptions</div>
     </div>
        </div>
     {/*  -----------------Middle  SideNavbar  ---------- */}

     <div className='home_sideNavbarMiddle'>
      <div className={'home_sideNavbar_TopOption'}>
          <div className='home_sideNavbarTopOptionTitle'>You</div>
          <ChevronRightIcon/>
     </div>
     <div className={'home_sideNavbar_TopOption'}>
          <RecentActorsIcon/>
   <div className='home_sideNavbarTopOptionTitle'>Your Channel</div>
     </div>
     <div className={'home_sideNavbar_TopOption'}>
          <HistoryIcon/>
   <div className='home_sideNavbarTopOptionTitle'>History</div>
     </div>
     <div className={'home_sideNavbar_TopOption'}>
          <PlaylistAddIcon/>
   <div className='home_sideNavbarTopOptionTitle'>Playlist</div>
     </div>
     <div className={'home_sideNavbar_TopOption'}>
          <OndemandVideoOutlinedIcon/>
   <div className='home_sideNavbarTopOptionTitle'>Your Videos</div>
     </div>
     <div className={'home_sideNavbar_TopOption'}>
          <WatchLaterOutlinedIcon/>
   <div className='home_sideNavbarTopOptionTitle'>Watch Later</div>
     </div>
     <div className={'home_sideNavbar_TopOption'}>
          <ThumbUpAltOutlinedIcon/>
   <div className='home_sideNavbarTopOptionTitle'>Liked Videos</div>
     </div>
     <div className={'home_sideNavbar_TopOption'}>
          <ContentCutOutlinedIcon/>
   <div className='home_sideNavbarTopOptionTitle'>Your Clips</div>
     </div>
     </div>

 {/*  ----------------- Bottom SideNavbar  ---------- */}
 <div className='home_sideNavbarMiddle'>
<div className={'home_sideNavbar_TopOption'}>
   <div className='home_sideNavbarTopOptionTitleHeader'>Subscriptions</div>
     </div>
       <div className='home_sideNavbar_TopOption'>
     <img  className='home_sideNavbarTop_ImgLogo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGKD5KKl6OhCcWByi844gfYnbHNSmC4Do5vA&s'/>
     <div className='home_sideNavbarTopOptionTitle'>Anju More</div>
     </div>
      <div className='home_sideNavbar_TopOption'>
     <img  className='home_sideNavbarTop_ImgLogo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvmNCtUxGTpR8gFKlx_lWZyT0-2LIb8Om63g&s'/>
     <div className='home_sideNavbarTopOptionTitle'>Physics Wallah</div>
     </div>
     <div className='home_sideNavbar_TopOption'>
     <img  className='home_sideNavbarTop_ImgLogo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrrFKt2XrcByIeOc4J4b-CYruZ4Aa_BrRxxeFahJCWaNhd_Bg1Tz4l9_ctwfOdR2otCis&usqp=CAU'/>
     <div className='home_sideNavbarTopOptionTitle'>College Wallah</div>
     </div>
     <div className='home_sideNavbar_TopOption'>
     <img  className='home_sideNavbarTop_ImgLogo' src='https://yt3.googleusercontent.com/00yIYVKjmFvR7sFZXmP5aMq1u0P7ZcLfnDW27A7zRD1hTqcWLwYn0-o_5rGkK2eKfCf43ueE7Q=s900-c-k-c0x00ffffff-no-rj'/>
     <div className='home_sideNavbarTopOptionTitle'>Apna College </div>
     </div>
     <div className='home_sideNavbar_TopOption'>
     <img  className='home_sideNavbarTop_ImgLogo' src='https://yt3.googleusercontent.com/W-LbQKXkf3HJsvau1PC8jnOoryI_7AjdGGORmmpWUO4Bdb3Alem-X4fasmV43aRXRydCy3gyAig=s160-c-k-c0x00ffffff-no-rj'/>
     <div className='home_sideNavbarTopOptionTitle'> Sandeep Maheshwari</div>
     </div>
     <div className='home_sideNavbar_TopOption'>
     <img  className='home_sideNavbarTop_ImgLogo' src='https://m.media-amazon.com/images/I/51VQsRfgzoL.png'/>
     <div className='home_sideNavbarTopOptionTitle'> Today News</div>
     </div>
     <div className='home_sideNavbar_TopOption'>
     <img  className='home_sideNavbarTop_ImgLogo' src='https://yt3.googleusercontent.com/npgfyFFlpAb9fP1F3CZUwtklfg_lWPU1df3UCi6Lkzh095Heshx6Y3HM0Bq3IlWMJWpAH0bbk2c=s900-c-k-c0x00ffffff-no-rj'/>
     <div className='home_sideNavbarTopOptionTitle'>India News</div>
     </div>
     </div>

    </div>
  )
}

export default SideNavbar