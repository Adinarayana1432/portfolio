import React, { useState, useRef, useEffect } from 'react';
import '../pages/Dummy.css'; // Assuming you have a CSS file for styles
import { FaRegUserCircle } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { GiDeerTrack } from "react-icons/gi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdDownload } from "react-icons/md";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && !hamburgerRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <nav className="navbar">
                <a href="#" className="nav-logo">LOGO</a>
                <button className='admit-btn' > <MdDownload className='dic'/>Admit card</button>
                <ul ref={menuRef} className={isMenuOpen ? "nav-menu active" : "nav-menu"}>

                    <li className="nav-item"><span><IoHome className='all-icons'/></span><a href="#" className="nav-link">Home</a></li>
                    <li className="nav-item"><span><IoMdNotifications  className='all-icons' /></span><a href="#" className="nav-link">Notifications</a></li>
                    <li className="nav-item"><span><GiDeerTrack   className='all-icons' /></span><a href="#" className="nav-link">Tracking</a></li>
                    <li className="nav-item"><span><FaRegCalendarAlt  className='all-icons' /></span><a href="#" className="nav-link">Upcoming Jobs</a></li>
                </ul>
                <button className='otr-btn'>OTR</button>
                <span className='icon-btn'><FaRegUserCircle className='icon' /></span>

                <div ref={hamburgerRef} className={isMenuOpen ? "hamburger open" : "hamburger"} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <div className='menu'>

                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;

