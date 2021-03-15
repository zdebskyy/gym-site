import React from "react";
import css from "./ScheduleInfo.module.css";

const ScheduleInfo = ({ schedule }) => {
  // console.log(schedule);
  const { address, workTime, gymInfo, gymAdditionalInfo } = schedule;

  return (
    <section className={css.container}>
      {address && (
        <div className={css.infoBlock}>
          <h4 className={css.blockTitle}>Наша адреса:</h4>
          {address.map((el) => (
            <p key={el} className={css.blockText}>
              {el}
            </p>
          ))}
        </div>
      )}
      {workTime && (
        <div className={css.infoBlock}>
          <h4 className={css.blockTitle}>Режим роботи:</h4>
          {workTime.map((el) => (
            <p key={el} className={css.blockText}>
              {el}
            </p>
          ))}
        </div>
      )}
      {gymInfo && (
        <div className={css.infoBlock}>
          <h4 className={css.blockTitle}>Зали:</h4>
          {gymInfo.map((el) => (
            <p key={el} className={css.blockText}>
              {el}
            </p>
          ))}
        </div>
      )}
      {gymAdditionalInfo && (
        <div className={css.infoBlock}>
          <h4 className={css.blockTitle}>Додатково:</h4>
          {gymAdditionalInfo.map((el) => (
            <p key={el} className={css.blockText}>
              {el}
            </p>
          ))}
        </div>
      )}
    </section>
  );
};

export default ScheduleInfo;
