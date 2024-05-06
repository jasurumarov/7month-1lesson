import React from 'react'
import Hero from '../../components/hero/Hero'
import Products from '../../components/products/Products'

const Home = () => {
  return (
    <div className='home-page'>
      <Hero/>
      <Products/>
    </div>
  )
}

export default Home