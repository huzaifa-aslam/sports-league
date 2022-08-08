import React, { useEffect, useState } from "react";
import LeagueService from "../../services/LeagueService";
import LeaderboardView from "./LeaderboardView";

const Leaderboard = () => {
  const http = new LeagueService();
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    // fetching Matches List

    const getAllMatches = async () => {
      try {
        const response = await http.fetchData();
        if (response.status === 200 || response.status === 201) {
          let result = await response.json();
          const teamDetail = http.getLeaderboard(result?.matches);
          setMatches(teamDetail);
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    getAllMatches();
  }, []);

  return <LeaderboardView matches={matches} />;
};

export default Leaderboard;
