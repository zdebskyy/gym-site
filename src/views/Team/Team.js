import React from "react";
import styles from "./Team.module.css";
import Layout from "../../components/Layout/Layout";

const Team = () => {
  return (
    <>
      <section className={styles.container}>
        <Layout></Layout>
      </section>
      <section className={styles.container2}>
        <Layout></Layout>
      </section>
    </>
  );
};

export default Team;
