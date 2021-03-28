import React from "react";
import styles from "./Team.module.css";
import Layout from "../../components/Layout/Layout";
import TeamItem from "./TeamItem";
import description from "../../db/description.json";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Team = () => {
  console.log(description);
  return (
    <>
      <section className={styles.container}>
        <h2 className={styles.teamTitle}>Наша команда</h2>
        <Layout>
          <Tabs>
            <TabList>
              <Tab>Ірпінська 76</Tab>
              <Tab>Семашко 13</Tab>
              <Tab>Кольцова 14</Tab>
              <Tab>Семашко 8а</Tab>
            </TabList>

            <TabPanel>
              <div className={styles.teamContainer}>
                <TeamItem team={"item1"} description={description[0]} />
                <TeamItem team={"item2"} />
                <TeamItem team={"item3"} />
                <TeamItem team={"item1"} description={description[0]} />
                <TeamItem team={"item1"} description={description[0]} />
                <TeamItem team={"item1"} description={description[0]} />
                <TeamItem team={"item1"} description={description[0]} />
                <TeamItem team={"item1"} description={description[0]} />
                <TeamItem team={"item1"} description={description[0]} />
              </div>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 3</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 4</h2>
            </TabPanel>
          </Tabs>
        </Layout>
      </section>
    </>
  );
};

export default Team;
