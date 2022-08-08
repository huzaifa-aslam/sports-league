import React from "react";
import Layout from "../../components/layout";
import styles from "./schedule.module.css";
import clsx from "clsx";
const ScheduleView = ({ matches }) => {
  // const header = ["Date/Time", "Stadium", "Home Team", "", "Away Team"];
  return (
    <Layout>
      <div className={clsx(`container-fluid ${styles.root} `)}>
        <div className="row">
          <div className="col-md-12">
            <h4
              className={clsx(
                `fw-bold text-center pt-5 pb-2 ${styles.heading}`
              )}
            >
              League Schedule
            </h4>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    {/* {header.map((item, idx) => {
                return (
                  <th className={styles.tblHeader} key={idx} scope="col">
                    {item}
                  </th>
                );
              })} */}
                    <th
                      className={clsx(
                        styles.tblHeader,
                        styles.displayDateTimeNone
                      )}
                      scope="col"
                    >
                      Date/Time
                    </th>
                    <th
                      className={clsx(
                        styles.tblHeader,
                        styles.displayStadiumNone
                      )}
                      scope="col"
                    >
                      Stadium
                    </th>
                    <th
                      className={clsx(styles.tblHeader, styles.homeHeader)}
                      scope="col"
                    >
                      Home Team
                    </th>
                    <th className={styles.tblHeader} scope="col"></th>
                    <th className={styles.tblHeader} scope="col">
                      Away Team
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {matches?.map(
                    (
                      {
                        date,
                        time,
                        stadium,
                        homeTeamFlag,
                        homeTeam,
                        score,
                        awayTeamFlag,
                        awayTeam,
                      },
                      idx
                    ) => {
                      return (
                        <tr key={idx} className={styles.tr}>
                          <td
                            className={clsx(
                              styles.nonBoldedCell,
                              styles.displayDateTimeNone
                            )}
                          >
                            <td className="d-flex">{date}</td>
                            {/* <br /> */}
                            <td className={styles.tdTime}>{time}</td>
                          </td>
                          <td
                            className={clsx(
                              styles.nonBoldedCell,
                              styles.tdStadium,
                              styles.displayStadiumNone
                            )}
                          >
                            {stadium}
                          </td>
                          <td
                            className={clsx(
                              styles.boldedCell,
                              styles.tdHomeTeam
                            )}
                          >
                            <td className={clsx(`${styles.td} pt-2`)}>
                              {homeTeam}
                            </td>
                            <td>
                              <img
                                className={styles.countryFlag}
                                src={homeTeamFlag}
                                alt="Home Team Flag"
                              />
                            </td>
                          </td>

                          <td
                            className={clsx(styles.boldedCell, styles.tdScore)}
                          >
                            {score}
                          </td>
                          <td className={styles.boldedCell}>
                            <td>
                              <img
                                className={styles.countryFlag}
                                src={awayTeamFlag}
                                alt="Away Team Flag"
                              />
                            </td>
                            <td className={clsx(`${styles.tdRight} pt-2`)}>
                              {awayTeam}
                            </td>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ScheduleView;
