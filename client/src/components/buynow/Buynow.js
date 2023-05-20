import React from 'react';
import './buynow.css';
import { Divider } from '@mui/material';
import Right from './Right';
import Option from './Option';
import Subtotal from './Subtotal';

const Buynow = () => {
  return (
    <div className='buynow_section'>
        <div className="buynow_container">
            <div className="left_buy">
                <h1>shopping cart</h1>
                <p>select all items</p>
                <span className='leftbuyprice'>price</span>
                <Divider />

                <div className="item_containert">
                    <img src="https://m.media-amazon.com/images/I/71iiXU7HHkL._SL1500_.jpg" alt="" />
                    <div className="item_details">
                        <h3>Mi NotebookPro UHD</h3>
                        <h3>Laptops</h3>
                        <h3 className='differentprice'>50,999</h3>
                        <p className='unusuall'>usually dispatched in 6 days</p>
                        <p>eligible for free shipping</p>
                        <Option />
                    </div>
                    <h3 className='item_price'>50,999</h3>
                </div>
                <Divider />
                <Subtotal />
            </div>
            <Right />
        </div>
    </div>
    
  )
}

export default Buynow