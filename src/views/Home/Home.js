import React from 'react';
import Layout from '../../components/Layout/Layout';
import styles from './Home.module.css';
import NewsItem from '../../components/NewsItem/NewsItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
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
        <h2 className={styles.newsTitle}>Новини</h2>
        <Slider {...settings}>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </Slider>
      </Layout>
    </section>
  );
};

export default Home;
