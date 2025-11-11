import React, { useState } from 'react';
import './Navbar.css';
import Topbar from '../TopBar/Topbar'
import { IoSearchOutline } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { HiBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import AddToCart from './AddToCart';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartQuantity = useSelector((state) => state.cart.totalQuantity)
    const [open, setOpen] = useState(false)
    const [color, setColor] = useState(false);
    const [openCart, setOpenCart] = useState(false);

    const openHandleCart = () => {
        setOpenCart(!openCart)
    }

    const HandleChange = () => {
        if (window.scrollY >= 80) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', HandleChange)

    const handleOpen = () => {
        setOpen(!open)
    }

    return <>
        <Topbar />
        <div className='main_navbar'>
            <nav className={color ? 'navbar actives' : 'navbar'}>
                <div className="logo">
                    <Link to={'/'}>
                        <img src={logo} alt="" />
                    </Link>
                </div>


                <div className='links'>
                    <ul class="nav justify-content-center list">
                        <li class="nav-item">
                            <NavLink to={'/'} class={({ isActive }) => isActive ? 'active' : undefined} end>Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to={'/shoppingdetail'} class={({ isActive }) => isActive ? 'active' : undefined} end>Shop</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to={'/features'} class={({ isActive }) => isActive ? 'active' : undefined} end>Features</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to={'/blog'} class={({ isActive }) => isActive ? 'active' : undefined} end>Blog</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to={'/about'} class={({ isActive }) => isActive ? 'active' : undefined} end>About</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to={'/contact'} class={({ isActive }) => isActive ? 'active' : undefined} end>Contact</NavLink>
                        </li>
                    </ul>
                </div>

                <div class="float-end icons_div">
                    <IoSearchOutline className='search_icon' />
                    <IoMdCart onClick={openHandleCart} className='basket_icon' />
                    <span>{cartQuantity}</span>
                </div>

                <div onClick={handleOpen} className="responsive_navbar">
                    <div className="toggle_btn">
                        {open ? <RxCross2 className='responsive_icon' /> : <HiBars3 className='responsive_icon' />}
                    </div>
                    {open ? <>
                        <div className='responsive_navbar_page'>
                            <div className='responsive_section'>
                                <div className='para_section'>
                                    <p>Free shipping for standard order over $100</p>
                                </div>
                                <div className='responsive_section_two'>
                                    <a href="">Help & FAQs</a>
                                    <a href="">My Account</a>
                                    <a href="">EN</a>
                                    <a href="">USD</a>
                                </div>
                            </div>
                            <ul>
                                <li><NavLink to={'/'} class={({ isActive }) => isActive ? 'active' : undefined} end>Home</NavLink></li>
                                <li><NavLink to={'/shoppingdetail'} class={({ isActive }) => isActive ? 'active' : undefined} end>Shop</NavLink></li>
                                <li><NavLink to={'/features'} class={({ isActive }) => isActive ? 'active' : undefined} end>Features</NavLink></li>
                                <li><NavLink to={'/blog'} class={({ isActive }) => isActive ? 'active' : undefined} end>Blog</NavLink></li>
                                <li><NavLink to={'/about'} class={({ isActive }) => isActive ? 'active' : undefined} end>About</NavLink></li>
                                <li><NavLink to={'/contact'} class={({ isActive }) => isActive ? 'active' : undefined} end>Contact</NavLink></li>
                            </ul>
                        </div>
                    </> : ''}
                </div>
            </nav>

            {openCart ? <>
                <AddToCart openHandleCart={openHandleCart} />
            </> : ''}

        </div>
    </>
}

export default Navbar