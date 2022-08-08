import React, { useEffect, useState } from "react";
import LeagueService from "../../services/LeagueService";
import LeaderboardView from "./LeaderboardView";
import moment from "moment";
import { flagUrl } from "../../constants";
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
          const teamDetail = getTeamsDetail(result?.matches);
          setMatches(teamDetail);
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    getAllMatches();
  }, []);

  const getTeamsDetail = (teams) => {
    let allHomeTeams = teams?.map((item) => item?.homeTeam);
    let allAwayTeams = teams?.map((item) => item?.awayTeam);
    let allTeams = [...allHomeTeams, ...allAwayTeams];
    let uniqueTeams = allTeams?.filter(
      (team, index) => allTeams?.indexOf(team) === index
    );
    let result = [];
    let obj = {
      teamName: "",
      matchPlayed: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0,
    };
    for (let index = 0; index < uniqueTeams?.length; index++) {
      const team = uniqueTeams?.[index];
      obj.teamName = team;
      for (let subIndex = 0; subIndex < teams?.length; subIndex++) {
        const subElement = teams?.[subIndex];
        if (subElement?.matchPlayed) {
          if (team === subElement?.homeTeam) {
            if (subElement?.homeTeamScore === subElement?.awayTeamScore) {
              obj.goalsFor = obj.goalsFor + subElement?.homeTeamScore;
              obj.goalsAgainst = obj.goalsAgainst + subElement?.awayTeamScore;
              obj.points = obj.points + 1;
              ++obj.matchPlayed;
            } else if (subElement?.homeTeamScore > subElement?.awayTeamScore) {
              obj.goalsFor = obj.goalsFor + subElement?.homeTeamScore;
              obj.goalsAgainst = obj.goalsAgainst + subElement?.awayTeamScore;
              obj.points = obj.points + 3;
              ++obj.matchPlayed;
            } else {
              obj.goalsFor = obj.goalsFor + subElement?.homeTeamScore;
              obj.goalsAgainst = obj.goalsAgainst + subElement?.awayTeamScore;
              obj.points = obj.points + 0;
              ++obj.matchPlayed;
            }
          } else if (team === subElement?.awayTeam) {
            if (subElement?.awayTeamScore === subElement?.homeTeamScore) {
              obj.goalsFor = obj.goalsFor + subElement?.awayTeamScore;
              obj.goalsAgainst = obj.goalsAgainst + subElement?.homeTeamScore;
              obj.points = obj.points + 1;
              ++obj.matchPlayed;
            } else if (subElement?.awayTeamScore > subElement?.homeTeamScore) {
              obj.goalsFor = obj.goalsFor + subElement?.awayTeamScore;
              obj.goalsAgainst = obj.goalsAgainst + subElement?.homeTeamScore;
              obj.points = obj.points + 3;
              ++obj.matchPlayed;
            } else {
              obj.goalsFor = obj.goalsFor + subElement?.awayTeamScore;
              obj.goalsAgainst = obj.goalsAgainst + subElement?.homeTeamScore;
              obj.points = obj.points + 0;
              ++obj.matchPlayed;
            }
          }
        }
      }

      result.push({
        ...obj,
        goalDifference: Math.abs(obj.goalsFor - obj.goalsAgainst),
        flag: `${flagUrl}${obj.teamName}`,
      });
      obj = {
        teamName: "",
        matchPlayed: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,
      };
    }
    return result;
  };

  return <LeaderboardView matches={matches} />;
};

export default Leaderboard;
