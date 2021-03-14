import React from "react";
import css from "./ScheduleInfo.module.css";

const ScheduleInfo = ({ schedule }) => {
  console.log(schedule);
  const { address, workTime, gymInfo, gymAdditionalInfo = [] } = schedule;

  return (
    <div className={css.container}>
      <div className={css.block}>
        <h4>Адреса:</h4>
        {address.map((el) => (
          <p key={el}>{el}</p>
        ))}
      </div>
      <div className={css.block}>
        <h4>Режим роботи:</h4>
        {workTime.map((el) => (
          <p key={el}>{el}</p>
        ))}
      </div>
      <div className={css.block}>
        <h4>Зали:</h4>
        {gymInfo.map((el) => (
          <p key={el}>{el}</p>
        ))}
      </div>
      {gymAdditionalInfo && (
        <div className={css.block}>
          {gymAdditionalInfo.map((el) => (
            <p key={el}>{el}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ScheduleInfo;
