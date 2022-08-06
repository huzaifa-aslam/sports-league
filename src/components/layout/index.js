import React from "react";
import Footer from "../footer";
import clsx from "clsx";
import styles from "./layout.module.css";
import scheduleLogo from "../../Images/schedule.png";
import leaderboard from "../../Images/leaderboard.png";
import logo from "../../Images/logo.svg";
import { Link } from "react-router-dom";
import { leaderBoard, schedule } from "../../constants";
const Layout = ({ children }) => {
  return (
    <div className={clsx(`container-fluid ${styles.root}`)}>
      <div className="row">
        <div className="col-md-12 justify-content-between d-flex">
          <div className="pt-1">
            <img src={logo} alt="logo-image" className={styles.logo} />
          </div>
          <div className={clsx(` pt-3  ${styles.rightCol}`)}>
            <img src={scheduleLogo} alt="schedule" className={styles.icon} />
            <p className={clsx(styles.leftText, styles.textColor)}>
              <Link
                className={clsx(`text-decoration-none ${styles.textColor}`)}
                to={schedule}
              >
                Schedule
              </Link>
            </p>
            <img src={leaderboard} alt="leaderboard" className={styles.icon} />
            <p className={styles.rightText}>
              <Link
                className={clsx(`text-decoration-none ${styles.textColor}`)}
                to={leaderBoard}
              >
                Leaderboard
              </Link>
            </p>
          </div>
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
