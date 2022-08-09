import React, { useEffect, useState } from "react";
import LeagueService from "../../services/LeagueService";
import LeaderboardView from "./LeaderboardView";

const Leaderboard = () => {
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
      const teamDetail = http.getLeaderboard(result);
      setMatches(teamDetail);
    } catch (error) {
      console.log("error", error);
    }
  };

  return <LeaderboardView matches={matches} />;
};

export default Leaderboard;
