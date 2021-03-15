import React from "react";
import styles from "./Team.module.css";
import Layout from "../../components/Layout/Layout";
import TeamItem from "./TeamItem";

const Team = () => {
  return (
    <>
      <section className={styles.container}>
        <h2 className={styles.teamTitle}>Наша команда</h2>
        <Layout>
          <div className={styles.teamContainer}>
            <TeamItem team={"firstTeam"} />
            <TeamItem team={"secondTeam"} />
          </div>
        </Layout>
      </section>
    </>
  );
};

export default Team;
