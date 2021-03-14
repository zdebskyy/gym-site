import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import Layout from "../Layout/Layout";

const Header = () => {
  return (
    <header className={styles.header}>
      <Layout>
        <div className={styles.container}>
          <div>LOGO</div>
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
          <div>Зателефонуйте нам</div>
        </div>
      </Layout>
    </header>
  );
};

export default Header;
