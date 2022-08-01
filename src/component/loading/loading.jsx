import React from "react";
import "./loading.scss";
import loadpic from "../../../public/LoadingScreen.webp"


export default function LoadingScreen() {
    return (
    <div className="loading-container">
        <img id="loadingImage" src={loadpic} ></img>
    </div>
    );
}


