import React from 'react';
import './Header.css';
import GrameenLifeImage from './grameenlogo.png';
import SearchIcon from './searchicon.png'
import BasketIcon from './BasketIcon.jpg'

export default function Header() {
  return (
    <div className='header'>
      <h1>Hello wassup,Amazon cloning going on</h1>
      <img className='header-logo' src={GrameenLifeImage} alt="Grameen Life" />
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
        <div className='header_optionBasket'>
        <img className='header-logo' src={BasketIcon} alt="Grameen Life" />
        <span className='header_BasketLineOne'>0</span>
        </div>
      </div>

    </div>
  )
}
