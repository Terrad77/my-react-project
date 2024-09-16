import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import './index.css';
// import { App2 } from './components/App2';

// npm install modern - normalize
// Імпорт стилів нормалізації
import 'modern-normalize';

// src/main.jsx

// щоб відрендерити всі компоненти додатка в DOM, в пакеті react-dom є методи createRoot(container) та render(element), які працюють разом.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Метод createRoot приймає посилання на DOM-елемент div, з id #root
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App2 />
//   </React.StrictMode>
// );
