require('file-loader?name=[name].[ext]!./index.html');
import React from "react";
import  ReactDOM from "react-dom";
import { App } from "./app";
import './app.scss';

// setup for the loading page 
const { useEffect } = React;
const loader = document.querySelector('.loader');

// setup the loaders 
const showLoader = () => loader.classList.remove('loader--hide');

const hideLoader = () => loader.classList.add('loader--hide');

const app = ({ hideLoader }) => {
    useEffect(hideLoader, []);

    return (
        <div id="loadingPage">Im the app</div>
    );
}




const appElement = document.getElementById('app');

setTimeout(() => 
ReactDOM.render(<App hideLoader={hideLoader} showLoader={showLoader} />, appElement), 10000);