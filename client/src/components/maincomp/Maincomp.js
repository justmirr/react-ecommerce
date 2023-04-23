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
        <Slide />
    </div>
  )
}

export default Maincomp