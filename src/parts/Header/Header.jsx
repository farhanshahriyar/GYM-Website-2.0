import React from 'react';
import {FiShoppingBag} from 'react-icons/fi';
import {BiUser} from 'react-icons/bi';
import {FiSearch} from 'react-icons/fi';
import './Header.css';

const Header = () => {
  return (
    <>
        <section id="header">
            <a href='/'>LOGO.</a>
            <div className='navbar'>
                <ul id='navbar-items'>
                    <li><a href='index.html'>Home</a></li>
                    <li><a href='#'>Shop</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Blog</a></li>
                    <li><a href='#'>Features</a></li>
                    <li><a href='#'>Contacts</a></li>           
                </ul>
            </div>

            <div className='navbar'>
                <ul id='navbar-items'>
            
                    <li><a href='#'><FiSearch/></a></li>
                    <li><a href='/login'><BiUser/></a></li>
                    <li><a href='#'><FiShoppingBag/></a></li>
                </ul>
            </div>
        </section>
    </>
  )
}

export default Header
