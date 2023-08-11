import React from 'react'
import './HomePage.css'
import './HomePageMobile.css'
import { BiSearch } from 'react-icons/bi'

function HomePage() {

  const category = [
    {
    name:"Music",
    image:"./src/assets/Cat1.png"
    },
    {
      name:"Sport",
      image:"./src/assets/Cat2.png"
    },
    {
      name:"Festival",
      image:"./src/assets/Cat3.png"
    },
    {
        name:"Wedding",
        image:"./src/assets/Cat4.png"
    }
]

  return (
    <div className='HomePage'>
    <section className='HomePage_Header'>
      <div className='HomePage_HeaderWrapper'>
        <div className='HeaderLogo'>
        <img src="./src/assets/LogoC.png" alt="" />
        </div>
        <BiSearch className='Search_Icons'/>
        <input type='text' placeholder='Search for events' className='Search_Bar'/>
        <div className='Pages_Profile'>
          <nav className='Header_Pages'>
            <ul>
              <li>Create Event</li>
              <li>Find Event</li>
              <li>About Us</li>
            </ul>
          </nav>
        </div>
        <div className='Header_Profile'>
          <h3>Mary</h3>
          <div className='Profile_Image'></div>
        </div>
      </div>
    </section>

    <section className='HomePage_Main'>
      <div className='HomePage_Events'>
      </div>
      <div className='Home_EventDesc'></div>
    </section>

    <section className='Header_Category'>
      <div className='Header_CategoryContent'>
        <span>Category</span> 
      </div>
      <div className='Header_CategoryContent_Cards'> 
      {
        category.map((e)=>(
          <>
          <div className='Category_card'>
            <img src={e.image} alt="" />  
          </div>
          <h3>{e.name}</h3>
          </>
        ))
      } 
      </div>
    </section>
  </div>
  )
}

export default HomePage