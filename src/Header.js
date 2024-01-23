import React from 'react';
import './Header.css';
import GrameenLifeImage from './grameenlogo.png';
import SearchIcon from './searchicon.png'
import BasketIcon from './BasketIcon.jpg'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      <Link to="/">
      <img className='header-logo' src={GrameenLifeImage} alt="Grameen Life" />
      </Link>
      
      <div className='header_search'>
        <input className='header_searchInput' type='text' /><img className='search-icon' src={SearchIcon} alt="Search Icon" />
      </div>
      <div className='header_nav'>
        <div className='header_option'>
          <span className='header_optionLineOne'>Hello</span>
          <span className='header_optionLineTwo'>Sign In</span>
        </div>
        <div className='header_option'>
        <span className='header_optionLineOne'>Return and Orders</span>
        </div>
        <div className='header_option'>
        <span className='header_optionLineOne'>Your Prime</span>
        </div>
        <Link to="/checkout">
        <div className='header_optionBasket'>
        <img className='header-logo' src={BasketIcon} alt="Grameen Life" />
        <span className='header_BasketLineOne'>0</span>
        </div>
        </Link>
        
      </div>

    </div>
  )
}
