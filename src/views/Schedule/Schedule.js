import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import queryString from "query-string";
import Layout from "../../components/Layout/Layout";
import ScheduleImage from "../../components/ScheduleImage/ScheduleImage";
import styles from "./Schedule.module.css";

const getClubFromProps = (props) =>
  queryString.parse(props.location.search).club;

class Schedule extends Component {
  state = {
    club: "",
  };

  componentDidMount() {
    this.props.history.push({
      search: "club=irpinska",
    });
    this.setState({ club: "irpinska" });
  }

  componentDidUpdate(prevProps) {
    const prevClub = getClubFromProps(prevProps);
    const nextClub = getClubFromProps(this.props);

    if (prevClub !== nextClub) {
      this.setState({ club: nextClub });
    }
  }

  // onClubChange = (clubName) => {
  //   this.props.history.push({
  //     pathname: this.props.location.pathname,
  //     search: `club=${clubName}`,
  //   });
  // };

  render() {
    const { club } = this.state;

    return (
      <section className={styles.container}>
        <Layout>
          <h2 className={styles.sectionTitle}>Наші клуби</h2>

          <div className={styles.clubsContainer}>
            <ul className={styles.clubsList}>
              <li className={styles.listItem}>
                <NavLink
                  to={{
                    pathname: "/schedule",
                    search: "?club=irpinska",
                  }}
                  className={styles.linkItem}
                >
                  Ірпінська 76
                </NavLink>
              </li>
              <li className={styles.listItem}>
                <NavLink
                  to={{
                    pathname: "/schedule",
                    search: "?club=semashko",
                  }}
                  className={styles.linkItem}
                >
                  Семашко 13
                </NavLink>
              </li>
              <li className={styles.listItem}>
                <NavLink
                  to={{
                    pathname: "/schedule",
                    search: "?club=koltsova",
                  }}
                  className={styles.linkItem}
                >
                  Кольцова 14
                </NavLink>
              </li>
              <li className={styles.listItem}>
                <NavLink
                  to={{
                    pathname: "/schedule",
                    search: "?club=trx",
                  }}
                  className={styles.linkItem}
                >
                  Міні групи TRX
                </NavLink>
              </li>
            </ul>

            <div className={styles.schedule}>
              <ScheduleImage club={club} />
            </div>
          </div>
        </Layout>
      </section>
    );
  }
}

export default Schedule;
