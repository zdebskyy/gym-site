import React from "react";
import css from "./ScheduleImage.module.css";

const ScheduleImage = ({ src }) => {
  return (
    <div className={css.container}>
      <img src={src} alt="" className={css.image} />
    </div>
  );
};

export default ScheduleImage;
