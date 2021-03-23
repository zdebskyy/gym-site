import React, { useState } from "react";
import styles from "./TeamItem.module.css";
import classNames from "classnames/bind";
// import { CSSTransition } from "react-transition-group";

const TeamItem = ({ team, description }) => {
  const [open, setOpen] = useState(true);

  const onRotate = () => {
    setOpen(!open);
  };
  return (
    <div
      className={classNames(open ? styles[team] : styles.rotate)}
      onClick={onRotate}
    >
      {!open && (
        <div className={styles.desc}>
          <p>{description.name}</p>
          <p>{description.education}</p>
          <p>{description.eduPlace}</p>
          <ul>
            {description.achivmentTitle}
            {description.achivments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul>
            {description.skillsTitle}
            {description.skills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>{description.xp}</p>
        </div>
      )}
    </div>
  );
};

export default TeamItem;
