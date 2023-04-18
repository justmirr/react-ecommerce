import React from 'react'
import './banner.css';
import Carousel from 'react-material-ui-carousel'

const Data = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/GWUnrec_BOB/WA3000._CB592962828_.jpg",
    "https://m.media-amazon.com/images/I/51ovs76vmtL._SX3000_.jpg"
];

const Banner = () => {
  return (
    <Carousel className='carousel'>
        {
            Data.map((imag, i) => {
                return (
                    <>
                        <img src={imag} alt="" className='banner_img'/>
                    </>
                )
            })
        }
    </Carousel>
  )
}

export default Banner