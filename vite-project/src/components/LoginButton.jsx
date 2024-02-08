import { Button } from "./Button";

// компоненти <LoginButton> та <FollowButton> можуть використовувати компонент <Button>, а не просто CSS-клас.

const LoginButton = () => {    
  // Унікальна логіка кнопки логіна
  return <Button variant="primary">Login</Button>;
};
