import React from 'react';
import '.Checkout.css'

function Checkout() {
  return (
    <div className="checkout">
        <div className="checkout_left">
            <img className="checkout_ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1.CB423492668_.jpg"
            alt=""
            />

            <div>
                <h2 classname="checkout_title">Your Basket</h2>
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
            
            </div>
        </div>

        <div className="checkout_right">
            <Subtotal />
            <h2>The subtotal will be here</h2>
        </div>

    </div>
  )
}

export default Checkout;