import clsx from "clsx";

// замість використання базового CSS-класу .button у компонентах <LoginButton> та <FollowButton>, краще створити компонент <Button> зі своїми власними стилями, які можуть відображатись у кількох варіантах.

export const Button = ({ variant, children }) => {
  // Базові стилі кнопки з кількома варіантами відображення
  return <button className={clsx("button", variant)}>{children}</button>;
};