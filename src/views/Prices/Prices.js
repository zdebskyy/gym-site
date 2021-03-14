import React from "react";
import styles from "./Prices.module.css";
import PriceItem from "../../components/PriceItem/PriceItem";
import Layout from "../../components/Layout/Layout";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import pricesData from "../../db/prices.json";
console.log(pricesData);

const Prices = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.container}>
      <Layout>
        <h2 className={styles.title}>Ціни нашого спортклубу</h2>

        <Slider {...settings}>
          <PriceItem text={"slide1"} />
          <PriceItem text={"slide1"} />
          <PriceItem text={"slide1"} />
          <PriceItem text={"slide1"} />
          <PriceItem text={"slide1"} />
        </Slider>

        <ul className={styles.list}>
          <li className={styles.listElement}>
            Тренування з тренером в тренажерному залі проводяться за попереднім
            записом. Якщо у Вас немає можливості прийти на той час, на який Ви
            записалися, то повідомте про це тренера заздалегідь - не менше ніж
            за 2 години, інакше тренування буде списано.
          </li>
          <li className={styles.listElement}>
            Відновлення загубленого абонемента - 15 грн. Без абонемента або
            оплати разового, пройти в зал ме можна.
          </li>
          <li className={styles.listElement}>
            Для здійснення "заморозки" зверніться до адміністратора, особисто
            або зателефонуйте.
          </li>
          <li className={styles.listElement}>
            Мінімальний термін заморозки - 4 дні.
          </li>
          <li className={styles.listElement}>
            Персокальне тренування з тренером з танців, фітнесу та боксу - від
            150грн/год
          </li>
          <li className={styles.listElement}>
            Групам спортеменів інших видів спорту, у яких частина тренувального
            процесу проходить в тренажерному залі зі своїм тренером оплачувати
            послугу "Тренування з запрошеним тренером" не потрібно.
          </li>
        </ul>
      </Layout>
    </div>
  );
};

export default Prices;
