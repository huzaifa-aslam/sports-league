import React from "react";
import Layout from "../../components/layout";
import styles from "./leaderboard.module.css";
import clsx from "clsx";
const LeaderboardView = () => {
  return (
    <Layout>
      <h4 className={clsx(`fw-bold text-center pt-5 pb-2 ${styles.heading}`)}>
        League Standings
      </h4>
    </Layout>
  );
};

export default LeaderboardView;
