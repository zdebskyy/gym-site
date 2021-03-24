import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import Layout from '../Layout/Layout';
import logo from '../../img/logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <Layout>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="logo"></img>
          </div>
          <div>
            <nav>
              <NavLink to="/" className={styles.linkItem}>
                Головна сторінка
              </NavLink>
              <NavLink to="/clubs" className={styles.linkItem}>
                Наші клуби
              </NavLink>
              <NavLink to="/prices" className={styles.linkItem}>
                Наші ціни
              </NavLink>
              <NavLink to="/schedule" className={styles.linkItem}>
                Розклад
              </NavLink>
              <NavLink to="/photos" className={styles.linkItem}>
                Фотогалерея
              </NavLink>
              <NavLink to="/team" className={styles.linkItem}>
                Наша команда
              </NavLink>
              <NavLink to="/contacts" className={styles.linkItem}>
                Наші контакти
              </NavLink>
            </nav>
          </div>
          <a href="" className={styles.phoneUsBtn}>Зателефонуйте нам</a>
        </div>
      </Layout>
    </header>
  );
};

export default Header;
