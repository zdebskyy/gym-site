import React from "react";
import schedules from "../../utils/schedules";
import css from "./ScheduleImage.module.css";

const getSrcByName = (name) => {
  return schedules.find((el) => el.club === name).src;
};

const ScheduleImage = ({ club = "irpinska" }) => {
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
