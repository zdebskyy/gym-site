import React from "react";
import styles from "./Contacts.module.css";
import Layout from "../../components/Layout/Layout";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import TelegramIcon from "@material-ui/icons/Telegram";

const Contacts = () => {
  return (
    <section className={styles.container}>
      <Layout>
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
            <a href="mailto:info@dii.com.ua" className={styles.socialLinkMail}>
              <div className={styles.icon}>
                <EmailIcon fontSize="medium" />
              </div>{" "}
              e-mail: info@dii.com.ua
            </a>

            <a
              href="https://www.facebook.com/SportclubDii"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLinkFacebook}
            >
              <div className={styles.icon}>
                <FacebookIcon fontSize="medium" />
              </div>{" "}
              www.facebook.com/SportclubDii
            </a>

            <a
              href="https://www.instagram.com/sportclubdii/"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLinkInstagram}
            >
              <div className={styles.icon}>
                <InstagramIcon fontSize="medium" />
              </div>
              www.instagram.com/sportclubdii/
            </a>
            <a
              href="https://t.me/sportclubdii"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLinkTelegram}
            >
              <div className={styles.icon}>
                <TelegramIcon fontSize="medium" />
              </div>
              t.me/sportclubdii
            </a>
          </div>
        </div>
      </Layout>
    </section>
  );
};

export default Contacts;

//t.me/sportclubdii
