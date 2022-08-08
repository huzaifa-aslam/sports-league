import React from "react";
import Footer from "../footer";
import clsx from "clsx";
import styles from "./layout.module.css";
import { Link } from "react-router-dom";
import { leaderBoard, schedule } from "../../constants";
const publicFolder = process.env.PUBLIC_URL;
const Layout = ({ children }) => {
  return (
    <>
      <div className={clsx(`container-fluid ${styles.root}`)}>
        <div className="row">
          <div className=" justify-content-between d-flex">
            <div className="pt-1">
              <img
                src={`${publicFolder}/Images/logo.svg`}
                alt="logo"
                className={styles.logo}
              />
            </div>
            <div className={clsx(` pt-3  ${styles.rightCol}`)}>
              <img
                src={`${publicFolder}/Images/schedule.png`}
                alt="schedule"
                className={styles.icon}
              />
              <p className={clsx(styles.leftText, styles.textColor)}>
                <Link
                  className={clsx(`text-decoration-none ${styles.textColor}`)}
                  to={schedule}
                >
                  Schedule
                </Link>
              </p>
              <img
                src={`${publicFolder}/Images/leaderboard.png`}
                alt="leaderboard"
                className={styles.icon}
              />
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
      </div>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
