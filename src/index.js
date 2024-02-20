/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import './app.scss'
require('file-loader?name=[name].[ext]!./index.html')

const appElement = document.getElementById('app')

ReactDOM.render(<App/>, appElement)
