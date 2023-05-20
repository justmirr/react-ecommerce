import React from 'react'
import "./navbarr.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';


const Navbarr = () => {
    return (
        <header>
            <nav>
                <div className="left">
                    <div className="navlogo">
                        <NavLink to="./">
                            <img src="./logo.png" alt="" />
                        </NavLink>
                    </div>
                    <div className="navsearchbar">
                        <input type="text" name="" id="textt" />
                        <div className="search_icon">
                            <SearchIcon id="search" />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="nav_btn">
                        <NavLink to="/login">sign in</NavLink>
                    </div>
                    <NavLink to="/buynow">
                        <div className="cart_btn">
                            <Badge badgeContent={1} color="primary">
                                <ShoppingCartIcon id="icon" />
                            </Badge>
                            <p>cart</p>
                        </div>
                    </NavLink>
                    <Avatar className="avtar" />
                </div>
            </nav>
        </header>
    )
}

export default Navbarr