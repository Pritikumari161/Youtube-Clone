import React from 'react'
import HomePage from '../../Components/HomePage/HomePage'
import SideNavbar from '../../Components/SideNavbar/SideNavbar'
import './Home.css'
import axios from 'axios'


function Home({sideNavbar}) {
  return (
    <div className='home'>
  <SideNavbar sideNavbar={sideNavbar}/>
    <HomePage sideNavbar={sideNavbar}/>

    </div>
  )
}

export default Home