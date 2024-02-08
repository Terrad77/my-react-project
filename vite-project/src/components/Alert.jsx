// CSS стилі компонента імпортуються у файл де його оголошено
// import "./Alert.css";

// Для вирішення більшості завдань, пов'язаних з безліччю класів, що задаються згідно з певними умовами, використовують бібліотеку clsx, тому додамо її у терміналі як залежність проекту: npm install clsx
//для використання імпортуємо ії у портрібний нам файл
import clsx from "clsx";




// Синтаксис імпорту CSS-модуля
import css from "./Alert.module.css";

// Отримуємо об'єкт відповідності імен класів
console.log(css); // { alert: "Alert_alert_ax7yz" }





// об'єкт стилів у змінній
// const alertStyles = {
//   margin: 8,
//   padding: "12px 16px",
//   borderRadius: 4,
//   backgroundColor: "gray",
//   color: "white",
// };

// Логіку вибору кольору винесемо у функцію getBgColor(variant), яка буде повертати рядок із назвою кольору залежно від значення параметра variant.
// const getBgColor = variant => {
//   switch (variant) {
//     case "info":
//       return "blue";
//     case "success":
//       return "green";
//     case "error":
//       return "red";
//     case "warning":
//       return "orange";
//     default:
//       throw new Error(`Unsupported variant prop value - ${variant}`);
//   }
// };


// Створимо компонент Alert який буде рендерити абзац тексту та приховає у собі майбутню логіку вибору кольору фону.
// export const Alert = ({ variant, children }) => {
//     return <p style={{ ...alertStyles, backgroundColor: getBgColor(variant), }}>{children}</p>;
// };

// У React HTML-атрибуту class відповідає JSX-атрибут className
// export const Alert = ({ children }) => {
//   return <p className="alert">{children}</p>;
// };

// Процес обчислення фінального значення атрибуту className залежить від розробника та поточного завдання. Наприклад, використовуємо масив рядків та метод join щоб отримати рядок класів.
// export const Alert = ({ variant, children }) => {
//   const classNames = ["alert", variant];
//     return <p className={classNames.join(" ")}>{children}</p>;
    
// };

// Клас alert і якийсь із variant буде завжди, а класи для пропсів elevated та outlined додаємо тільки за потребою використовуючи блок if.
// export const Alert = ({ variant, outlined, elevated, children }) => {
//   const classNames = ["alert", variant];

//   if (outlined) {
// 		classNames.push("is-outlined");
// 	}

//   if (elevated) {
// 		classNames.push("is-elevated");
// 	}

//   return <p className={classNames.join(" ")}>{children}</p>;
// };
// Для обчислення фінального значення атрибуту className можна було використати блок if...else, інструкцію switch, тернарний оператор або будь-який інший синтаксис JavaScript, який дасть нам той же результат. Головне, щоб рядок з класами був складений правильно і не мав зайвих чи невалідних значень.

// Ось як виглядатиме код компонента Alert використовуючи бібліотеку clsx
// export const Alert = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//       className={clsx(
//         "alert",
//         variant,
//         outlined && "is-outlined",
//         elevated && "is-elevated"
//       )}
//     >
//       {children}
//     </p>
//   );
// };

// Можна комбінувати варіативну та об'єктну форму функції clsx. Спочатку передаються класи, які будуть завжди, після чого в об'єкті налаштувань перераховуємо динамічні значення класів залежно від якихось обчислень. Нам здається, що така форма запису є більш декларативною та зрозумілою, тому рекомендуємо використовувати саме її.
// export const Alert = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//       className={clsx("alert", variant, {
//         "is-outlined": outlined,
//         "is-elevated": elevated,
//       })}
//     >
//       {children}
//     </p>
//   );
// };

// export const Alert = ({ children }) => {

// Звертаємось до властивості об'єкта на ім'я класу з файлу CSS-модуля
//   return <p className={css.alert}>{children}</p>;
// };
// Селектори тегів за замовчуванням будуть у глобальній області видимості, CSS-модулі генерують лише унікальні імена селекторів класу.


// При композиції у простих випадках можна обійтися без бібліотеки clsx. Не задаємо базовий клас alert, тому що від нього виконано композицію класів варіантів. В результаті на елементі < p > будуть два класи, базовий alert і клас варіанта, у якому перевизначається значення кольору фону.
// До властивостей об'єкта зазвичай звертаються як css.alert, але можна використовувати квадратні дужки, наприклад css["alert"]. Це корисно у випадку коли ім'я властивості зберігається у змінній, як у нас у пропсі variant.
// export const Alert = ({ variant, children }) => {
//     return <p className={css[variant]}>{children}</p>;};    



// Тепер ми знову використовуємо бібліотеку clsx для складання фінального значення властивості className.
export const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(css[variant], {
        [css.isOutlined]: outlined,
        [css.isElevated]: elevated,
      })}
    >
      {children}
    </p>
  );
};

