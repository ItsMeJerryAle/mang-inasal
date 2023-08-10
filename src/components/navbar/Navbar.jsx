import React, { useState } from 'react'
import Logo from '../../assets/mang-inasal-logo.png'
import { RiFacebookCircleFill, RiInstagramFill, RiRestaurant2Fill, RiCloseLine, RiMenu3Line } from "react-icons/ri";
import './navbar.css';

const Menu = () => (
    <>
        <p><a href="#Home">Home</a></p>
        <p><a href="#a">About Us</a></p>
        <p><a href="#b">Products</a></p>
        <p><a href="#c">Feedbacks</a></p>
        <p><a href="#d">Awards</a></p>
        <p><a href="#e">Gallery</a></p>
        <p><a href="#f">Contact</a></p>
    </>
)

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='navbar'>
            <div className="navbar-link">
                <div className="navbar-logo">
                    <img src={Logo} alt="Mang Inasal Logo" />
                </div>
                <div className="navbar-links-container">
                    <Menu />
                </div>
                <div className="navbar-right">
                    <p>Follow us on: </p>
                    <RiFacebookCircleFill color="fff" size={27} />
                    <RiInstagramFill color="fff" size={27} />
                    <button type="button">
                        <RiRestaurant2Fill color="004600" size={27} /> <p>Order Now</p>
                    </button>
                </div>
                <div className="toggle-menu">
                    {
                        toggleMenu
                            ? <RiCloseLine color="fff" size={27} onClick={() => setToggleMenu(false)} />
                            : <RiMenu3Line color="fff" size={27} onClick={() => setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        <div className='toggle-menu-container scale-up-center'>
                            <div className='toggle-menu-container-links'>
                                <Menu />

                                <div className='toggle-menu-container-cta'>
                                    <p>Follow us on: </p>
                                    <RiFacebookCircleFill color="fff" size={27} />
                                    <RiInstagramFill color="fff" size={27} />
                                    <button type="button">
                                        <RiRestaurant2Fill color="004600" size={27} /> <p>Order Now</p>
                                    </button>
                                </div>

                            </div>
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar;