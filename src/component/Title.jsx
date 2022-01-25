import React from "react";
import imageTitle from "../assets/art/imageindex"
import { Link } from "react-router-dom";



const artTitles = imageTitle.map(img => img.title);
const imgAddress = imageTitle.map(imgt => imgt.imagePath);
      
console.log(imgAddress);


const Title = () => {



    return (
        <div className= "Titles">
            
                {imageTitle.map(img => <a href={img.imagePath} target="_blank"><div className="title">{img.title}</div></a>)}
            
            
        </div>
    );


}





export default Title;
