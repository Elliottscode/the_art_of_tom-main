// eslint-disable-next-line no-unused-vars
import React from 'react'
import imageTitle from '../assets/art/imageindex'

// get list of titles and names from imageIndex

// component for displaying image data
const Title = () => {
  return (
    <div className= "Titles">

      {imageTitle.map(img => <a href={img.imagePath} target="_blank" className="titlea"><div className="title">{img.title}</div></a>)}

    </div>
  )
}

export default Title
