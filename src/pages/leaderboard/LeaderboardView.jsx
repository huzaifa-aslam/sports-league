import React from "react";
import Layout from "../../components/layout";
import styles from "./leaderboard.module.css";
import clsx from "clsx";
const LeaderboardView = ({ matches }) => {
  const header = [
    {
      name: "Team Name",
      width: "",
      classes: `${styles.tblHeader} `,
    },
    {
      name: "MP",
      width: "90px",
      classes: `${styles.tblHeader}`,
    },
    {
      name: "GD",
      width: "90px",
      classes: `${styles.tblHeader} ${styles.displayGoalDiff}`,
    },
    {
      name: "GF",
      width: "90px",
      classes: `${styles.tblHeader} ${styles.displayNone}`,
    },
    {
      name: "GA",
      width: "90px",
      classes: `${styles.tblHeader} ${styles.displayNone}`,
    },
    {
      name: "Points",
      width: "90px",
      classes: `${styles.tblHeader}`,
    },
  ];
  return (
    <Layout>
      <div className={clsx(`${styles.root} container-flaud`)}>
        <div className="row">
          <div className="col-md-12">
            <h4 className={clsx(`fw-bold text-center  ${styles.heading}`)}>
              League Standings
            </h4>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    {header.map((item, idx) => {
                      return (
                        <th
                          className={item.classes}
                          width={item.width}
                          key={idx}
                          scope="col"
                        >
                          {item.name}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {matches?.map(
                    (
                      {
                        flag,
                        teamName,
                        matchPlayed,
                        goalDifference,
                        goalsFor,
                        goalsAgainst,
                        points,
                      },
                      idx
                    ) => {
                      return (
                        <tr key={idx} className={styles.tr}>
                          <td className={clsx(` ${styles.boldedCell}`)}>
                            <td>
                              <img
                                className={styles.countryFlag}
                                src={flag}
                                alt="Team Flag"
                              />
                            </td>
                            <td className={styles.tdRight}>{teamName}</td>
                          </td>

                          <td className={clsx(styles.nonBoldedCell)}>
                            {matchPlayed}
                          </td>
                          <td
                            className={clsx(
                              styles.nonBoldedCell,
                              styles.displayGoalDiff
                            )}
                          >
                            {goalDifference}
                          </td>
                          <td
                            className={clsx(
                              styles.nonBoldedCell,
                              styles.displayNone
                            )}
                          >
                            {goalsFor}
                          </td>
                          <td
                            className={clsx(
                              styles.nonBoldedCell,
                              styles.displayNone
                            )}
                          >
                            {goalsAgainst}
                          </td>

                          <td
                            className={clsx(styles.boldedCell, styles.tdPoints)}
                          >
                            {points}
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

export default LeaderboardView;
