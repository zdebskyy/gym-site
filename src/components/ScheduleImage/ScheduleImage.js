import React from "react";
import irpinskaImg from "../../img/schedules/irpenskaya_sayt1.jpg";
import semashkoImg from "../../img/schedules/semashko_dlya_sayta1.jpg";
import koltsovaImg from "../../img/schedules/kolcova_dlya_sayta1.jpg";
import trxImg from "../../img/schedules/trh_dlya_sayta1.jpg";
import css from "./ScheduleImage.module.css";

const schedules = [
  { id: 1, club: "irpinska", src: irpinskaImg },
  { id: 2, club: "semashko", src: semashkoImg },
  { id: 3, club: "koltsova", src: koltsovaImg },
  { id: 4, club: "trx", src: trxImg },
];

const getSrcByName = (name) => {
  if (!name) {
    return;
  }
  return schedules.find((el) => el.club === name).src;
};

const ScheduleImage = ({ club }) => {
  console.log("ScheduleImage:", club);
  console.log(getSrcByName(club));
  return (
    <div className="ScheduleWrapper">
      <img
        src={getSrcByName(club)}
        alt={`${club} club schedule`}
        className={css.image}
      />
    </div>
  );
};

export default ScheduleImage;
