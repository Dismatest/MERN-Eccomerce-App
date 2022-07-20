import React from 'react'
import Advertisement from '../components/Advertisement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLatter from '../components/NewsLatter'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <Advertisement />
      <Navbar />
      <Slider />
      <Categories />
      <Products/>
      <NewsLatter/>
      <Footer/>
    </div>
  )
}

export default Home