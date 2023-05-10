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
            <img src="https://m.media-amazon.com/images/I/31iKvmedmiL._SY445_SX342_QL70_FMwebp_.jpg" alt="fridge" />
            <p>LG Digital Inverter Refrigerator</p>
            <p>9999</p>
          </div>
        </div>
        {/* <Slide /> */}
    </div>
  )
}

export default Maincomp