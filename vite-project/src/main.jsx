import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './components/App.jsx'
import './index.css'
import { App2 } from './components/App2'

// використаєм сучасну бібліотеку modern-normalize для додавання стилів нормалізації до проекту. Спочатку додамо її як залежність проекту: npm install modern - normalize
// Після цього в файлі main.jsx ми імпортуємо стилі нормалізації. Це додасть стилі з файлу нормалізації до проекту.
// Імпорт стилів нормалізації
import "modern-normalize";




// src/main.jsx

// щоб відрендерити всі компоненти додатка в DOM, в пакеті react-dom є методи createRoot(container) та render(element), які працюють разом.
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
// Метод createRoot приймає посилання на DOM-елемент div, з id #root
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>,
)
