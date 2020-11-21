import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import 'normalize.css'
import { GlogalStyles } from './global-styles'

ReactDOM.render(
  <>
    <GlogalStyles />
    <App />
  </>,
  document.getElementById('root')
)
