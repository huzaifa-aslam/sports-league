import React from "react";
import Layout from "../../components/layout";
import styles from "./schedule.module.css";
import clsx from "clsx";
const ScheduleView = () => {
  return (
    <Layout>
      <h4 className={clsx(`fw-bold text-center pt-5 pb-2 ${styles.heading}`)}>
        League Schedule
      </h4>
    </Layout>
  );
};

export default ScheduleView;
