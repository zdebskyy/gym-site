import React from "react";
import Layout from "../../components/Layout/Layout";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../../react-tabs.css";
import styles from "./Photos.module.css";

const Photos = () => {
  return (
    <>
      <section className={styles.container}>
        <h2 className={styles.photosTitle}>Фото клубів</h2>
        <Layout>
          <Tabs>
            <TabList>
              <Tab>Ірпінська 76</Tab>
              <Tab>Семашко 13</Tab>
              <Tab>Кольцова 14</Tab>
            </TabList>

            <TabPanel>
              <div className={styles.photosContainer}>
                <h2>Any content 1</h2>
              </div>
            </TabPanel>
            <TabPanel>
              <div className={styles.photosContainer}>
                <h2>Any content 2</h2>
              </div>
            </TabPanel>
            <TabPanel>
              <div className={styles.photosContainer}>
                <h2>Any content 3</h2>
              </div>
            </TabPanel>
          </Tabs>
        </Layout>
      </section>
    </>
  );
};

export default Photos;
