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
      {open ? (
        "HELLO"
      ) : (
        <div className={styles.desc}>
          <CSSTransition in={!open} timeout={200} classNames="my-node">
            <span>"GOODBAY"</span>
          </CSSTransition>
        </div>
      )}
    </div>
  );
};

export default TeamItem;
