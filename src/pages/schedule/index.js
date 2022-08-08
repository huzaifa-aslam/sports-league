import React, { useEffect, useState } from "react";
import LeagueService from "../../services/LeagueService";
import ScheduleView from "./ScheduleView";
import moment from "moment";
import { flagUrl } from "../../constants";
const Schedule = () => {
  const http = new LeagueService();
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    // fetching Matches List

    const getAllMatches = async () => {
      try {
        const response = await http.fetchData();
        if (response.status === 200 || response.status === 201) {
          let result = await response.json();
          let updatedData = result.matches.map((item) => {
            return {
              ...item,
              date: moment(item.matchDate).format("DD.MM.YYYY"),
              time: moment(item.matchDate).format("hh:mm"),
              homeTeamFlag: `${flagUrl}${item?.homeTeam}`,
              awayTeamFlag: `${flagUrl}${item?.awayTeam}`,
              score: `${
                item?.matchPlayed
                  ? item.homeTeamScore + " : " + item.awayTeamScore
                  : "-:-"
              }`,
            };
          });
          setMatches(updatedData);
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    getAllMatches();
  }, []);

  return <ScheduleView matches={matches} />;
};

export default Schedule;
