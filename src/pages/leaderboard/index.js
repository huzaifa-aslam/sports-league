import React, { useEffect, useState } from "react";
import LeagueService from "../../services/LeagueService";
import LeaderboardView from "./LeaderboardView";
import {
  flagUrl,
  matchDrawPoint,
  matchLostPoint,
  matchWonPoint,
} from "../../constants";
const INITIAL_TEAM_DETAIL = {
  teamName: "",
  matchPlayed: 0,
  goalsFor: 0,
  goalsAgainst: 0,
  points: 0,
};
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
  const getMatchDetail = (obj, homeTeamScore, awayTeamScore, point) => {
    obj.goalsFor = obj.goalsFor + homeTeamScore;
    obj.goalsAgainst = obj.goalsAgainst + awayTeamScore;
    obj.points = obj.points + point;
    ++obj.matchPlayed;
    return obj;
  };
  const getTeamsDetail = (teams) => {
    let allHomeTeams = teams?.map((item) => item?.homeTeam);
    let allAwayTeams = teams?.map((item) => item?.awayTeam);
    let allTeams = [...allHomeTeams, ...allAwayTeams];
    let uniqueTeams = allTeams?.filter(
      (team, index) => allTeams?.indexOf(team) === index
    );
    let result = [];
    let obj = { ...INITIAL_TEAM_DETAIL };
    for (let index = 0; index < uniqueTeams?.length; index++) {
      const team = uniqueTeams?.[index];
      obj.teamName = team;
      for (let subIndex = 0; subIndex < teams?.length; subIndex++) {
        const subElement = teams?.[subIndex];
        if (subElement?.matchPlayed) {
          if (team === subElement?.homeTeam) {
            if (subElement?.homeTeamScore === subElement?.awayTeamScore) {
              const data = getMatchDetail(
                obj,
                subElement?.homeTeamScore,
                subElement?.awayTeamScore,
                matchDrawPoint
              );
              obj = data;
            } else if (subElement?.homeTeamScore > subElement?.awayTeamScore) {
              const data = getMatchDetail(
                obj,
                subElement?.homeTeamScore,
                subElement?.awayTeamScore,
                matchWonPoint
              );
              obj = data;
            } else {
              const data = getMatchDetail(
                obj,
                subElement?.homeTeamScore,
                subElement?.awayTeamScore,
                matchLostPoint
              );
              obj = data;
            }
          } else if (team === subElement?.awayTeam) {
            if (subElement?.awayTeamScore === subElement?.homeTeamScore) {
              const data = getMatchDetail(
                obj,
                subElement?.awayTeamScore,
                subElement?.homeTeamScore,
                matchDrawPoint
              );
              obj = data;
            } else if (subElement?.awayTeamScore > subElement?.homeTeamScore) {
              const data = getMatchDetail(
                obj,
                subElement?.awayTeamScore,
                subElement?.homeTeamScore,
                matchWonPoint
              );
              obj = data;
            } else {
              const data = getMatchDetail(
                obj,
                subElement?.awayTeamScore,
                subElement?.homeTeamScore,
                matchLostPoint
              );
              obj = data;
            }
          }
        }
      }

      result.push({
        ...obj,
        goalDifference: Math.abs(obj.goalsFor - obj.goalsAgainst),
        flag: `${flagUrl}${obj.teamName}`,
      });
      obj = { ...INITIAL_TEAM_DETAIL };
    }
    return result;
  };

  return <LeaderboardView matches={matches} />;
};

export default Leaderboard;
