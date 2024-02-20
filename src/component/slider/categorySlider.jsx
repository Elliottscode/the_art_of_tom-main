/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'

// swiper component import
import { Swiper, SwiperSlide } from 'swiper/react'

// swiper styles
import 'swiper/scss'
import 'swiper/scss/pagination'

// my styles
import './sliderStyles.scss'

// art data
import artData from '../../assets/art/imageindex'

import SwiperCore, { Pagination } from 'swiper'

SwiperCore.use([Pagination])

let slideTitle = ''
const pathData = artData.map(obj => { return [obj.id, obj.imagePath, obj.title, obj.category] })

function shuffleArray (array) {
  let currentIndex = array.length; let randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }
  return array
}

function groupBy (ar, prop) {
  const cat = {}
  for (let i = 0; i < ar.length; i++) {
    const p = ar[i][prop]
    if (!cat[p]) { cat[p] = [] }
    cat[p].push(ar[i])
  }
  return cat
}
function createSlider (arRand, arrCat) {
  const slideCategory = []
  console.log(Object.values(arrCat)[0][3].category)
  console.log(Object.values(arrCat)[0][3].imagePath)
  const catLegnth = Object.keys(arrCat).length
  for (let i = 0; i < arRand.length; i++) {
    // object[i] =  <swiper> or slides[i] = swiper
    const slides = []
    slides.push(<SwiperSlide key={'random' + i}><img src={arRand[i][1]} alt={arRand[i][2]} /></SwiperSlide>)

    for (let j = 0; j < catLegnth; j++) {
      // console.log("hi")
      const lengthofgroup = Object.values(arrCat)[j]
      if (arRand[i][3] === Object.values(arrCat)[j][0].category) {
        // console.log("working here")
        for (let k = 0; k < lengthofgroup.length; k++) {
          const srcs = Object.values(arrCat)[j][k].imagePath
          const alts = Object.values(arrCat)[j][k].title
          const cateogory = Object.values(arrCat)[j][k].category
          if (arRand[i].id !== Object.values(arrCat)[j][k].id) {
            slides.push(<SwiperSlide key={'category' + k}><img src={srcs} alt={alts + ', ' + cateogory} /></SwiperSlide>)
          }
        }
      }
    }

    // console.log(slides)
    slideCategory.push(<SwiperSlide key={'categorySlidermain' + i}><Swiper key={'categorySlider' + i} className="swiper" loop={true} direction={'vertical'} draggable={true} nested={true} preloadImages={true} >{slides}</Swiper></SwiperSlide>)
  }
  return (slideCategory)
}

console.log('this')
// addToCategory(pathData, category2, uniqueCatogorys);
const random = shuffleArray(pathData)
const catObj = groupBy(artData, 'category')
console.log('category')
console.log(catObj)
const sli = createSlider(random, catObj)
console.log(sli)

export default function App () {
  function titleUpdate (index) {
    console.log(index)
    setShowElement(true)
    if (typeof titleTimer !== 'undefined') {
      // the variable is defined
      clearTimeout(titleTimer)
    }
    slideTitle = pathData[index][2]
    return slideTitle
  }
  // changes title for slide change
  const [artTitle, setTitle] = useState(0)

  // hides the title after x seconds
  const [showElement, setShowElement] = useState(true)
  let titleTimer
  function titleDisapear () {
    titleTimer = setTimeout(function () {
      setShowElement(false)
    }, 10000)
  }

  useEffect(() => {
    // titleDisapear()
  }, [])

  // for debugging title box print statment in on transition end

  return (
    <div>
      <>
        {showElement ? (<div className="titleBox"><div id="titleText" >{artTitle}</div></div>) : (<div></div>)}{' '}
        <Swiper id="categorySlider" className="swiper" preloadImages={true} loop={true} draggable={true} nested={true} onTransitionEnd={titleDisapear()} onSlideChange={index => setTitle(titleUpdate(index.realIndex))}>
          {sli}
        </Swiper>
      </>
    </div>

  )
}
