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
            <NavLink to="/">
              <img src={logo} alt="logo"></img>
            </NavLink>
          </div>
          <div>
            <nav>
              <NavLink
                to="/"
                className={styles.linkItem}
                activeClassName={styles.activeLinkItem}
                exact={true}
              >
                Головна сторінка
              </NavLink>
              <NavLink
                to="/prices"
                className={styles.linkItem}
                activeClassName={styles.activeLinkItem}
              >
                Наші ціни
              </NavLink>
              <NavLink
                to="/schedule"
                className={styles.linkItem}
                activeClassName={styles.activeLinkItem}
              >
                Наші клуби та розклад
              </NavLink>
              <NavLink
                to="/photos"
                className={styles.linkItem}
                activeClassName={styles.activeLinkItem}
              >
                Фотогалерея
              </NavLink>
              <NavLink
                to="/team"
                className={styles.linkItem}
                activeClassName={styles.activeLinkItem}
              >
                Наша команда
              </NavLink>
              <NavLink
                to="/contacts"
                className={styles.linkItem}
                activeClassName={styles.activeLinkItem}
              >
                Наші контакти
              </NavLink>
            </nav>
          </div>
          <a href="tel:444444" className={styles.phoneUsBtn}>
            Зателефонуйте нам
          </a>
        </div>
      </Layout>
    </header>
  );
};

export default Header;
