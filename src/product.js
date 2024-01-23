import React from 'react'
import "./product.css"

function product({title,image,price,rating,description}) {
    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p>{description}</p>
                <p className='product_price'>
                    <small>Rs</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    {/* <p>{rating}</p> */}
                    {Array(rating).fill().map((i) =>(
                        <span key={i}>*</span>
                    ))}
                    
                </div>
                <img className='product_img' src={image} alt='' />
                <button className='product_button'>Add to Basket</button>
            </div>
        </div>
    )
}



export default product
