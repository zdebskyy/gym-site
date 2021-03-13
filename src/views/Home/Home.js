import React from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./Home.module.css";
import NewsItem from "../../components/NewsItem/NewsItem";

const Home = () => {
  return (
    <section className={styles.section}>
      <video src="video/gym.mp4" autoPlay loop muted />
      <Layout>
        <h1 className={styles.title}>
          СПОРТКЛУБ <span>"Дії "</span>
        </h1>
        <p className={styles.description}>
          «Дії» - це мережа спортклубів з сучасним якісним обладнанням, потужною
          вентиляцією та кондиціонуванням. Зі зручними умовами для тренувань і
          чесними та зрозумілими цінами без підступу. Тут завжди людно і весело,
          безліч обладнання для різноманітного та цікавого тренування, немає
          ніякого пафосу, і навіть прийшовши в перший раз в житті в будь-якій
          фізичній формі, Ви зможете відчути себе затишно як вдома і комфортно
          тренуватися в своє задоволення.
        </p>
        <ul className={styles.newsContainer}>
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </ul>
      </Layout>
    </section>
  );
};

export default Home;
