import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import Layout from "../Layout/Layout";

const Header = () => {
  return (
    <Layout>
      <header className={styles.header}>
        <div>LOGO</div>
        <div>
          <nav>
            <NavLink to="/" className={styles.linkItem}>
              Головна сторінка
            </NavLink>
            <NavLink to="/" className={styles.linkItem}>
              Наші клуби
            </NavLink>
            <NavLink to="/" className={styles.linkItem}>
              Наші ціни
            </NavLink>
            <NavLink to="/" className={styles.linkItem}>
              Розклад
            </NavLink>
            <NavLink to="/" className={styles.linkItem}>
              Фотогалерея
            </NavLink>
            <NavLink to="/" className={styles.linkItem}>
              Наша команда
            </NavLink>
            <NavLink to="/" className={styles.linkItem}>
              Наші контакти
            </NavLink>
          </nav>
        </div>
        <div>Зателефонуйте нам</div>
      </header>
    </Layout>
  );
};

export default Header;
