import React from "react";
import styles from "./Prices.module.css";
import PriceItem from "../../components/PriceItem/PriceItem";

import pricesData from '../../db/prices.json';
console.log(pricesData);


const Prices = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ціни нашого спортклубу</h2>

      <PriceItem />

      <ul className={styles.list}>
        <li className={styles.listElement}>
          Тренування з тренером в тренажерному залі проводяться за попереднім
          записом. Якщо у Вас немає можливості прийти на той час, на який Ви
          записалися, то повідомте про це тренера заздалегідь - не менше ніж за
          2 години, інакше тренування буде списано.
        </li>
        <li className={styles.listElement}>
          Відновлення загубленого абонемента - 15 грн. Без абонемента або оплати
          разового, пройти в зал ме можна.
        </li>
        <li className={styles.listElement}>
          Для здійснення "заморозки" зверніться до адміністратора, особисто або
          зателефонуйте.
        </li>
        <li className={styles.listElement}>Мінімальний термін заморозки - 4 дні.</li>
        <li className={styles.listElement}>
          Персокальне тренування з тренером з танців, фітнесу та боксу - від
          150гри/год
        </li>
        <li className={styles.listElement}>
          Групам спортеменів інших видів спорту, у яких частина тренувального
          процесу проходить в тренажерному залі зі своїм тренером оплачувати
          послугу "Тренування з запрошеним тренером" не потрібно.
        </li>
      </ul>
    </div>
  );
};

export default Prices;
