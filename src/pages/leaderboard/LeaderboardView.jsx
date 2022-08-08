import React from "react";
import Layout from "../../components/layout";
import styles from "./leaderboard.module.css";
import clsx from "clsx";
const LeaderboardView = ({ matches }) => {
  const header = [
    {
      name: "Team Name",
      width: "",
    },
    {
      name: "MP",
      width: "90px",
    },
    {
      name: "GD",
      width: "90px",
    },
    {
      name: "GF",
      width: "90px",
    },
    {
      name: "GA",
      width: "90px",
    },
    {
      name: "Points",
      width: "90px",
    },
  ];
  return (
    <Layout>
      <div className={clsx(`${styles.root} container-flaud`)}>
        <div className="row">
          <div className="col-md-12">
            <h4
              className={clsx(
                `fw-bold text-center pt-5 pb-2 ${styles.heading}`
              )}
            >
              League Standings
            </h4>
            {
              <table class="table table-hover">
                <thead>
                  <tr>
                    {header.map((item, idx) => {
                      return (
                        <th
                          className={styles.tblHeader}
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
                          <td className={styles.boldedCell}>
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
                          <td className={clsx(styles.nonBoldedCell)}>
                            {goalDifference}
                          </td>
                          <td className={clsx(styles.nonBoldedCell)}>
                            {goalsFor}
                          </td>
                          <td className={clsx(styles.nonBoldedCell)}>
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
            }
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LeaderboardView;
