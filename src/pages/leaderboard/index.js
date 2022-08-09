import React, { useEffect, useState } from "react";
import LeagueService from "../../services/LeagueService";
import LeaderboardView from "./LeaderboardView";
import { toast } from "react-toastify";

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
      const teamDetail = http.getLeaderboard();
      setMatches(teamDetail);
    } catch (error) {
      toast.error("Something Went Wrong!");
    }
  };

  return <LeaderboardView matches={matches} />;
};

export default Leaderboard;
