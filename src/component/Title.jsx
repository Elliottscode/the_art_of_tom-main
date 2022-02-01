import React from "react";
import imageTitle from "../assets/art/imageindex"
import { Link } from "react-router-dom";


// get list of titles and names from imageIndex 
const artTitles = imageTitle.map(img => img.title);
const imgAddress = imageTitle.map(imgt => imgt.imagePath);
      
console.log(imgAddress);

// component for displaying image data 
const Title = () => {



    return (
        <div className= "Titles">
            
                {imageTitle.map(img => <a href={img.imagePath} target="_blank" className="titlea"><div className="title">{img.title}</div></a>)}
            
            
        </div>
    );


}





export default Title;
