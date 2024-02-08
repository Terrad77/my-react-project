import { Button } from "./Button";
// компоненти <LoginButton> та <FollowButton> можуть використовувати компонент <Button>, а не просто CSS-клас.

const FollowButton = () => {
  // Унікальна логіка кнопки підписки
  return <Button variant="secondary">Follow</Button>;
};