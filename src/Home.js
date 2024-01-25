import React from 'react'
import "./Home.css"
import Product from "./product"

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/Jan/unrecatf/citi/Makeup-PCcv._CB584595621_.jpg' alt=''/>

        <div className='home_row'>
           <Product title="Haier"
            price={10999}
            image="https://m.media-amazon.com/images/I/51YoxGAgWoL._AC_UL480_FMwebp_QL65_.jpg"
            description="190 L 4 Star Direct Cool Single Door Refrigerator Appliance (2023 Model, HED-204DS-P, Dazzle Steel)"
            rating={5}/>
           <Product title="LG"
           price={23000}
           image="https://m.media-amazon.com/images/I/61SzOdusjSL._AC_UY327_FMwebp_QL65_.jpg"
           description="242 L 3 Star Smart Inverter Frost-Free Double Door Refrigerator (GL-I292RPZX, Shiny Steel, Door Cooling+"
           rating={3}/>
           <Product title="Whirlpool"
           price={12540}
           image="https://m.media-amazon.com/images/I/51rI+jSqx5L._AC_UY327_FMwebp_QL65_.jpg"
           description="Whirlpool 184 L 2 Star Direct-Cool Single Door Refrigerator (205 WDE CLS 2S SAPPHIRE BLUE-Z, Blue,2023 Model)"
           rating={4}/>
        </div>

        <div className='home_row'>
        

        </div>



      </div>
    </div>
  )
}

export default Home
