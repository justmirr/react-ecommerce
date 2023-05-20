import React from 'react';
import './cart.css';
import { Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Cart2 = () => {
    return (
        <div className="cart_section">
            <div className="cart_container">
                <div className="left_cart">
                    <img src="https://m.media-amazon.com/images/I/51xJGkUET+L._UY741_.jpg" alt="cart" />
                    <div className="cart_btn">
                        <NavLink to='/buynow'>
                            <button className='cart_btn1'>add to cart</button>
                        </NavLink>
                        <button className='cart_btn2'>buy now</button>
                    </div>
                </div>
                <div className="right_cart">
                    <h3>Fashion</h3>
                    <h4>The SV Style Unisex Printed Akatsuki Half Black and Half White Hoodie</h4>
                    <Divider />
                    <p className="mrp">M.R.P.: ₹1799</p>
                    <p>deal of the day: :<span style={{color:"#B12704"}}>₹999.99</span></p>
                    <p>you save: : <span style={{color:"B12704"}}>₹999</span></p>
                    <div className="discount_box">
                        <h5>discount: <span style={{color:"#111"}}>extra 10% off</span></h5>
                        <h4>free delivery: <span style={{color:"#111", fontWeight:600}}>may 29-31</span> details</h4>
                        <p>fastest delivery: <span style={{color:"#111", fontWeight:600}}>thursday 11AM</span></p>
                        <div className="description">about the item: <span style={{color:"#565959", fontSize:14, fontWeight: 500, letterSpacing:"0.4px"}}>Shop from a wide range of anime Hoodies from SV Style. Perfect for your everyday use, you could pair it with a stylish pair of Jeans or Trousers to complete the look. Cotton Fabric Big Hood Large pockets, Stylish print and Comfortable fit. All what is needed for a perfect Hoodie.</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart2