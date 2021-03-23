import React from "react";
import styles from "./Team.module.css";
import Layout from "../../components/Layout/Layout";
import TeamItem from "./TeamItem";
import description from "../../db/description.json";

const Team = () => {
  console.log(description);
  return (
    <>
      <section className={styles.container}>
        <h2 className={styles.teamTitle}>Наша команда</h2>
        <Layout>
          <div className={styles.teamContainer}>
            <TeamItem team={"firstTeam"} description={description[0]} />
            <TeamItem team={"secondTeam"} />
          </div>
        </Layout>
      </section>
    </>
  );
};

export default Team;
