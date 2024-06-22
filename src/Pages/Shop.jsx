import React from 'react'
import Hero from '../Commponents/Hero/Hero'
import Popular from '../Commponents/Popular/Popular'
import Offers from '../Commponents/Offers/Offers'
import NewCollections from '../Commponents/New_Collection/NewCollections'
import  '../Pages/CSS/shop.css'
import NewsLetter from '../Commponents/NewsLetter/NewsLetter'
function Shop() {
  return (
    <div className='shop' >
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      {/* <NewsLetter/> */}
     
    </div>
  )
}

export default Shop
