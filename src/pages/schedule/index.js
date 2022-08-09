import React, { useEffect, useState } from "react";
import LeagueService from "../../services/LeagueService";
import ScheduleView from "./ScheduleView";
import moment from "moment";
import { flagUrl } from "../../constants";
import { toast } from "react-toastify";
const Schedule = () => {
  const http = new LeagueService();
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    // fetching Matches List

    getAllMatches();
  }, []);
  const getAllMatches = async () => {
    try {
      await http.fetchData();
      const result = http.getMatches();
      let updatedData = result?.map((item) => {
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
    } catch (error) {
      toast.error("Something Went Wrong!");
    }
  };

  return <ScheduleView matches={matches} />;
};

export default Schedule;
