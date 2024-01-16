import React from 'react';
import './header.css';

function Header() {
  return (
    <div className='header'>
      {/* Amazon Logo */}
      <img
        className='header_logo'
        src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
        alt='Amazon Logo'
      />

      {/* Search Bar */}
      <div className='header_search'>
        <input
          className='header_searchInput'
          type='text'
          placeholder='Search...'
        />
        <svg
          className='header_searchIcon'
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          viewBox='0 0 16 16'
        >
          <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0' />
        </svg>
      </div>

      {/* Navigation Options */}
      <div className='header_Nav'>
        <div className='header_option'>
          <span className='header_optionLineOne'>Hello Guest</span>
          <span className='header_optionLineTwo'>Sign In</span>
        </div>

        <div className='header_option'>
          <span className='header_optionLineOne'>Returns</span>
          <span className='header_optionLineTwo'>& Orders</span>
        </div>

        <div className='header_option'>
          <span className='header_optionLineOne'>Your</span>
          <span className='header_optionLineTwo'>Membership</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
