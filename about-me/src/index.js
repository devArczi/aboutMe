import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import background from "./assets/background.png"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Mouse+Memoirs&display=swap');
  body {
    background-image: url("${background}");
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100%;
    margin: 0 10%;
  }
`
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
