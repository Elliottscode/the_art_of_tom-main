/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import './Home.scss'
// import Imgslider from "../component/slider/ImageSlider.jsx"
import { Button } from 'bootstrap'

import RandomSlider from '../component/slider/randomSlider.jsx'
// eslint-disable-next-line no-unused-vars
import CategorySlider from '../component/slider/categorySlider.jsx'

const Home = () => {
  return (

    <div className="home">
      {/* <RandomSlider></RandomSlider> */}
      <CategorySlider></CategorySlider>

    </div>

  )
}

export default Home
