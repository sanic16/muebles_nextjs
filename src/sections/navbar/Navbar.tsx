import React from 'react'
import { FaFacebook, FaHeart, FaInstagram, FaLinkedin, FaSearch, FaShoppingCart, FaSignInAlt, FaTruck, FaTwitter } from 'react-icons/fa'
import './navbar.css'

export default function Navbar() {
  return (
    <>
      <ul className='social-icons'>

        <li className='social-icon-item'>
          <a href="#" className='social-icon-link'>
            <FaFacebook className='social-icon'/>
          </a>
        </li>

        <li className='social-icon-item'>
          <a href="#" className='social-icon-link'>
            <FaLinkedin className='social-icon'/>
          </a>
        </li>

        <li className='social-icon-item'>
          <a href="#" className='social-icon-link'>
            <FaInstagram className='social-icon'/>
          </a>
        </li>

        <li className='social-icon-item'>
          <a href="#" className='social-icon-link'>
            <FaTwitter className='social-icon'/>
          </a>
        </li>

      </ul>

      <nav className='first-nav'>

        <ul className='first-nav-list'>

          <li className='first-nav-item'>
            <a href="#" className='first-nav-link'>
              <FaSignInAlt />
              Sign Up / Log In
            </a>
          </li>

          <li className='first-nav-item'>
            <a href="#" className='first-nav-link'>
              <FaShoppingCart />
              Cart (<span>2 items</span>)
            </a>
          </li>

          <li className='first-nav-item'>
            <a href="#" className='first-nav-link'>
              <FaTruck />
              Order Now
            </a>
          </li>

          <li className='first-nav-item'>
            <a href="#" className='first-nav-link'>
              <FaHeart />
              Wish List
            </a>
          </li>

        </ul>
      </nav>

      <div className='search'>
        <form className="search-form">
          <input type="text" className='search-input' placeholder='Search'/>
          <button className='search-btn'>
            <FaSearch />
          </button>
        </form>
      </div>
      
    </>
  )
}
