import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import styles from "./Schedule.module.css";

const Schedule = () => {
  // console.log(this.props.history);
  return (
    <section className={styles.section}>
      <video src="video/gym.mp4" autoPlay loop muted />
      <Layout>
        <h1 className={styles.title}>
          СПОРТКЛУБ <span>"Дії "</span>
        </h1>
        <h2 className={styles.clubsTitle}>Наші клуби</h2>

        <div className={styles.clubsList}>
          <NavLink
            to="/"
            className={styles.linkItem}
            activeClassName={styles.activeLinkItem}
          >
            Ірпінська 76
          </NavLink>
          <NavLink to="/semashko" className={styles.linkItem}>
            Семашко 13
          </NavLink>
          <NavLink to="/koltsova" className={styles.linkItem}>
            Кольцова 14
          </NavLink>
          <NavLink to="/trx" className={styles.linkItem}>
            Міні групи TRX
          </NavLink>
        </div>
      </Layout>
    </section>
  );
};

export default Schedule;
