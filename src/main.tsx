
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // 引入 BrowserRouter
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/luna"> {/* 设置 basename */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
