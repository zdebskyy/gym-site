import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import queryString from "query-string";
import Layout from "../../components/Layout/Layout";
import ScheduleImage from "../../components/ScheduleImage/ScheduleImage";
import ScheduleMap from "../../components/ScheduleMap/ScheduleMap";
import gyms from "../../utils/gyms";

import styles from "./Schedule.module.css";
import ScheduleInfo from "../../components/ScheduleInfo/ScheduleInfo";

const getClubFromProps = (props) =>
  queryString.parse(props.location.search).club;

const getSchedule = (name) =>
  name ? gyms.find((el) => el.club === name) : undefined;

class Schedule extends Component {
  state = {
    club: undefined,
  };

  componentDidMount() {
    const club = getClubFromProps(this.props);
    console.log("schedule. club:", club);

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
    // console.log("schedule. prevClub:", prevClub);
    // console.log("schedule. nextClub:", nextClub);

    if (prevClub !== nextClub && nextClub) {
      this.setState({ club: nextClub });
    }
  }

  render() {
    const { club } = this.state;
    const schedule = getSchedule(club);
    // console.log(gyms);

    return (
      <article className={styles.container}>
        <Layout>
          <h2 className={styles.sectionTitle}>Наші клуби</h2>

          <div className={styles.clubsContainer}>
            <ul className={styles.clubsList}>
              {gyms.map((gym) => (
                <li className={styles.listItem} key={gym.id}>
                  <NavLink
                    to={{
                      pathname: "/schedule",
                      search: `?club=${gym.club}`,
                    }}
                    className={styles.linkItem}
                  >
                    {gym.title}
                  </NavLink>
                </li>
              ))}
            </ul>

            {schedule && (
              <>
                <section className={styles.scheduleWrapper}>
                  <h3 className={styles.scheduleTitle}>{schedule.title}</h3>

                  <ScheduleMap
                    club={club}
                    center={schedule.centerPosition}
                    marker={schedule.marker}
                  />

                  <ScheduleImage src={schedule.src} />
                </section>

                <section className={styles.gymInfo}>
                  <h3 className={styles.scheduleTitle}>Інформація</h3>
                  <ScheduleInfo schedule={schedule} />
                </section>
              </>
            )}
          </div>
        </Layout>
      </article>
    );
  }
}

export default Schedule;
