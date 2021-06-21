import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
import { FiShoppingCart } from "react-icons/fi";
import { Count} from './Count';


export const Navbar = () => {

    const [ open, setOpen ] = useState(true);
    const showMenu = () => setOpen(!open);
    const closeMenu = () => setOpen(true);
    
    return (
        <div >
            <div className={ open ? 'NavBar-container' : 'NavBar-container2'}>
                <nav className='nav-links'>
                    <ul>
                        <li><Link onClick={closeMenu} to='/'><h1>Dei Gratia</h1></Link></li>
                    </ul>
                </nav>
                <nav className='nav-links'>
                    <ul>
                        <li><Link onClick={closeMenu} to='Shop'>Shop</Link></li>
                        <li><Link onClick={closeMenu} to='About'>About</Link></li>
                        <li><Link onClick={closeMenu} to='Contact'>Contact</Link></li>
                        <li><Link onClick={closeMenu} to='Stocklist'>Stocklists</Link></li>
                        <li><Link onClick={closeMenu} to='Cart'><FiShoppingCart /></Link></li>
                        <div className='counter'>
                            <Count/>
                        </div>
                    </ul>   
                </nav>
            </div> 
            <div onClick={showMenu} className='Hamburger-menu'>
                <div className={open ? 'Hamburger' : 'change line1'}></div>
                <div className={open ? 'Hamburger' : 'change line2'}></div>
                <div className={open ? 'Hamburger' : 'change line3'}></div> 
            </div>         
        </div>
    )
}
