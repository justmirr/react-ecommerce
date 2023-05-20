import React from 'react';
import './cart.css';
import { Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Cart = () => {
    return (
        <div className="cart_section">
            <div className="cart_container">
                <div className="left_cart">
                    <img src="https://m.media-amazon.com/images/I/51DGcy8eBCL._SX522_.jpg" alt="cart" />
                    <div className="cart_btn">
                        <NavLink to='/buynow'>
                            <button className='cart_btn1'>add to cart</button>
                        </NavLink>
                        <button className='cart_btn2'>buy now</button>
                    </div>
                </div>
                <div className="right_cart">
                    <h3>kitchen appliances</h3>
                    <h4>Pigeon FAVOURITE Electric Kettle 1.5L</h4>
                    <Divider />
                    <p className="mrp">M.R.P.: ₹1195</p>
                    <p>deal of the day: :<span style={{color:"#B12704"}}>₹625.00</span></p>
                    <p>you save: : <span style={{color:"B12704"}}>₹570</span></p>
                    <div className="discount_box">
                        <h5>discount: <span style={{color:"#111"}}>extra 10% off</span></h5>
                        <h4>free delivery: <span style={{color:"#111", fontWeight:600}}>may 29-31</span> details</h4>
                        <p>fastest delivery: <span style={{color:"#111", fontWeight:600}}>thursday 11AM</span></p>
                        <div className="description">about the item: <span style={{color:"#565959", fontSize:14, fontWeight: 500, letterSpacing:"0.4px"}}>Pigeon by Stovekraft Amaze Plus Electric Kettle (14289) with Stainless Steel Body, 1.5 litre, used for boiling Water, making tea and coffee, instant noodles, soup etc. 1500 Watt (Silver)</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart