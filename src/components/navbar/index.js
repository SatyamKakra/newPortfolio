import React, { useState } from 'react';
import {FaBars, FaReact } from 'react-icons/fa';
import {HiX} from 'react-icons/hi';
import { Link } from 'react-router-dom';
import SatyamLogo from "../../images/SatyamLogo.svg";
import './styles.scss';

const data = [
    {
        label: 'HOME',
        to: '/'
    },
    {
        label: 'ABOUT',
        to: '/about'
    },
    {
        label: 'SKILLS',
        to: '/skills'
    },
    {
        label: 'RESUME',
        to: '/resume'
    },
    {
        label: 'PORTFOLIO',
        to: '/portfolio'
    },
    {
        label: 'CONTACT',
        to: '/contact'
    }
]

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false)

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
        document.body.classList.toggle("menu-open", !toggleIcon);
    }

    const closeMenu = () => {
        setToggleIcon(false);
        document.body.classList.remove("menu-open"); // Re-enable scrolling
    };

    return (
        <div>
            <nav className='navbar'>
                <div className='navbar_container'>
                    <Link to={'/'} className='navbar_container_logo'>
                        {/* <FaReact size={30} /> */}
                        <img src={SatyamLogo} alt="SK Logo"/>
                    </Link>
                </div>
                {/* <ul className='navbar_container_menu'> */}
                <ul className={`navbar_container_menu ${toggleIcon ? 'active' : ''}`}>
                    {
                        data.map((item, key)=> (
                            <li key={key} className='navbar_container_menu_item'>
                                <Link className='navbar_container_menu_item_links' to={item.to} onClick={closeMenu}>
                                {item.label}
                                </Link>

                            </li>
                        ))
                    }

                </ul>
                <div className='nav-icon' onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>
                    }

                </div>

            </nav>

        </div>
    )
}

export default Navbar;