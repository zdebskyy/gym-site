import React, { useState } from "react";
import styles from "./Contacts.module.css";
import Layout from "../../components/Layout/Layout";

const Contacts = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>НАШІ КОНТАКТИ</h2>
      <div className={styles.contactsBox}>
        <div className={styles.address}>
          <p className={styles.phones}>
            Ірпінська 76 , тел:{" "}
            <a href="tel:(044)332-32-05" className={styles.phones}>
              (044)332-32-05
            </a>
          </p>
          <p className={styles.phones}>
            Кольцова 14 , тел:{" "}
            <a href="tel:(044)332-30-25" className={styles.phones}>
              (044)332-30-25
            </a>
          </p>
          <p className={styles.phones}>
            Сємашко 13 , тел:{" "}
            <a href="tel:(044)332-32-42" className={styles.phones}>
              (044)332-32-42
            </a>
          </p>
          <p className={styles.phones}>
            Стуса 35-37 , тел:{" "}
            <a href="tel:(044)332-32-06" className={styles.phones}>
              (044)332-32-06
            </a>
          </p>
        </div>
        <div className={styles.socialMedia}>
          <p className={styles.socialLinks}>E-mail: info@dii.com.ua</p>
          <a
            href="https://www.facebook.com/SportclubDii"
            target="_blank"
            rel="noreferrer"
            className={styles.socialLinks}
          >
            www.facebook.com/SportclubDii
          </a>
          <a
            href="https://www.instagram.com/sportclubdii/"
            target="_blank"
            rel="noreferrer"
            className={styles.socialLinks}
          >
            https://www.instagram.com/sportclubdii/
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
