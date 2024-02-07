// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// src/components/App.jsx

// Для кожного компонента створюється окремий файл, тому необхідно експортувати компонент із його файлу.
// const Product = () => {
//   return (
//     <div>
//       <h2>Cookies</h2>
// 			<p>Price: 999 credits</p>
//     </div>
//   );
// };

// 1.Імпортуємо Product в компоненті App, тобто там, де хочемо його використовувати.
// 2.Під час рендерингу компонента <Product /> також використовується синтаксис JSX, тому обов'язково закривати тег компонента зі зворотним слешем (/) перед закриваючою дужкою тега.
import { Product } from './Product';

// Передамо компоненті Products кілька інших властивостей.

export default function App() {
  return (
    <div>
         <h1>Best selling</h1>

      <Product
        name="Tacos With Lime"
        // imgUrl="<https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640>"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="<https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640>"
        price={14.29}
      />

    </div>
  );
}
