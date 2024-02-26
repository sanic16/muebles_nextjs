import React from 'react'
import { FaFacebook, FaHeart, FaInstagram, FaLinkedin, FaSearch, FaShoppingCart, FaSignInAlt, FaTruck, FaTwitter } from 'react-icons/fa'
import { furniture_categories } from '@/utils/data'
import dropdown_image from '@/../public/images/dropdown-image.jpg'
import './navbar.css'
import Image from 'next/image'



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

      <nav className='second-nav'>
        <ul className='second-nav-list'>
          
          <li className="second-nav-item">
            <a href="#" className='second-nav-link'>
              Muebles
            </a>
            <div className="dropdown">
              <ul className='dropdown-first-list'>

                {
                  furniture_categories.map(category => (
                    category ? category.id < 10 && (
                      <li className='dropdown-list-item' key={category.id}>
                        <a href="#" className='dropdown-list-link'>
                          { category.title }
                        </a>
                      </li>
                    ) : null
                  ) )
                }

              </ul>

              <ul className='dropdown-second-list'>
                {
                  furniture_categories.map(category => (
                    category ? category.id > 9 && (
                      <li className='dropdown-list-item' key={category.id}>
                      <a href="#" className='dropdown-list-link'>
                        { category.title }
                      </a>
                    </li>
                    ) : null
                  ))
                }
              </ul>
              <Image src={dropdown_image} alt='' className='dropdown-image' /> 
            </div>
          </li>

          <li className="second-nav-item">
            <a href="#" className='second-nav-link'>
              Cuartos
            </a>
          </li>

          <li className="second-nav-item">
            <a href="#" className='second-nav-link'>
              Cocina
            </a>
          </li>

          <li className="second-nav-item">
            <a href="#" className='second-nav-link'>
              Exterior
            </a>
          </li>

          <li className="second-nav-item">
            <a href="#" className='second-nav-link'>
              Iluminación
            </a>
          </li>

          <li className="second-nav-item">
            <a href="#" className='second-nav-link'>
              Dormitorio y Baños
            </a>
          </li>

          <li className="second-nav-item">
            <a href="#" className='second-nav-link'>
              Ventanas
            </a>
          </li>    
        
        </ul>
      </nav>      
    </>
  )
}
