import React from 'react'
import Subtotal from './Subtotal'
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function checkout() {
  return (
    <div className='checkout'>
        <div className='checkout_left'>
        
        <img className='checkout_ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/Jan/unrecatf/citi/Makeup-PCcv._CB584595621_.jpg" alt=""/>
        <div>
            <h2 className='checkout_title'>
            Your shopping Basket</h2>
        </div>
        </div>
        <div className='checkout_right'>
          <Subtotal/>
        <h2>The subtotal will go here</h2>
        </div>
     
    </div>
  )
}

export default checkout
