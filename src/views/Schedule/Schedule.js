import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import queryString from "query-string";
import Layout from "../../components/Layout/Layout";
import ScheduleImage from "../../components/ScheduleImage/ScheduleImage";
import ScheduleMap from "../../components/ScheduleMap/ScheduleMap";
import schedules from "../../utils/schedules";

import styles from "./Schedule.module.css";

const getClubFromProps = (props) =>
  queryString.parse(props.location.search).club;

const getSchedule = (name) =>
  name ? schedules.find((el) => el.club === name) : undefined;

class Schedule extends Component {
  state = {
    club: undefined,
  };

  componentDidMount() {
    const club = getClubFromProps(this.props);

    if (club) {
      this.setState({ club });
      return;
    }

    this.props.history.replace({
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

  render() {
    const { club } = this.state;
    const schedule = getSchedule(club);

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

            {schedule && (
              <div className={styles.schedule}>
                <h3 className={styles.scheduleTitle}>{schedule.title}</h3>
                <ScheduleMap
                  club={club}
                  center={schedule.centerPosition}
                  marker={schedule.marker}
                />
                <ScheduleImage src={schedule.src} />
              </div>
            )}
          </div>
        </Layout>
      </section>
    );
  }
}

export default Schedule;
