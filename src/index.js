import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from "./GlobalStyles";
import Meta from './Meta';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Meta />
      <GlobalStyles />
      <App />
    </BrowserRouter>
);