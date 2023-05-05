import React from 'react'
import Banner from './Banner'
import Slide from './Slide'
import './home.css';

const Maincomp = () => {
  return (
    <div className='home_section'>
        <div className="banner_part">
            <Banner />
        </div>
        <div className="slide_part">
          <div className="left_slide">
            <Slide/>
          </div>
          <div className="right_slide">
            <h3>new launches</h3>
            <img src="" alt="" />
          </div>
        </div>
        {/* <Slide /> */}
    </div>
  )
}

export default Maincomp