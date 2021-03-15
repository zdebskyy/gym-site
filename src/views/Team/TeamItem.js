import React, { useState } from "react";
import styles from "./TeamItem.module.css";
import classNames from "classnames/bind";
import { CSSTransition } from "react-transition-group";

const TeamItem = ({ team }) => {
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
          <span>"GOODBYE"</span>
        </div>
      )}
    </div>
  );
};

export default TeamItem;
