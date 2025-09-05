import React, { useState } from 'react';
import './Navbar.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Navbar = () => {
    const [open, setOpen] =useState(false);
  return (
    <div className='navbar'>
        <div className="wrapper">
        <div className="left">
            <div className="item">
            <img src="\img\india.png" alt="India" />
            <KeyboardArrowDownIcon />
        </div>
        <div className="item">
            <span>IND</span>
            <KeyboardArrowDownIcon />
        </div>
        <div className="item">
            <Link className="link" to="/products/1">Women</Link>
        </div>
        <div className="item">
            <Link className="link" to="/products/2">Men</Link>
        </div>
        <div className="item">
            <Link className="link" to="/products/3">Children</Link>
        </div>
        </div>
        <div className="center">
            <Link className="link" >UPMA STORE</Link>
        </div>
        <div className="right">
        <div className="item">
            <Link className="link" >Homepage</Link>
        </div>
        <div className="item">
            <Link className="link" >About</Link>
        </div>
        <div className="item">
            <Link className="link" >Contact</Link>
        </div>
        <div className="item">
            <Link className="link" >Stores</Link>
        </div>
        <div className="icons">
        <SearchIcon />
        <PersonOutlineIcon />
        <FavoriteBorderIcon />
        <div className="cartIcon" onClick={()=>setOpen(!open)}>
        <ShoppingCartOutlinedIcon />
        <span>0</span>
        </div>
        </div>
        </div>
        </div>
        {open && <Cart/>}
    </div>
  )
}

export default Navbar;