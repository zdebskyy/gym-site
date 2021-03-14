import React from "react";
import css from "./ScheduleImage.module.css";

const ScheduleImage = ({ src }) => {
  return (
    <div className="ScheduleWrapper">
      <img src={src} alt="" className={css.image} />
    </div>
  );
};

export default ScheduleImage;
