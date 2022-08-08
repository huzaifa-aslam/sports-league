import {
  baseUrl,
  flagUrl,
  INITIAL_LEADERBOARD_DETAIL,
  matchDrawPoint,
  matchLostPoint,
  matchWonPoint,
} from "../constants";

export const callGetAPI = async (url, method) => {
  const response = await fetch(`${baseUrl}${url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  return response;
};

export const fetchMatches = async (url, method) => {
  const response = await fetch(`${baseUrl}${url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  });

  return response;
};

// sorting team according
// 1 descending points
// 2 goal difference
// 3 goals for
// 4 ascending order by name

export const sortedTeams = (teams) => {
  if (teams.length) {
    let sort = teams
      .sort((a, b) => b.points - a.points)
      .sort((a, b) => b?.goalDifference - a?.goalDifference)
      .sort((a, b) => b.goalsFor - a.goalsFor)
      .sort((a, b) => a.teamName.localeCompare(b.teamName));
    return sort;
  }
};

export const getMatchDetail = (obj, homeTeamScore, awayTeamScore, point) => {
  obj.goalsFor = obj.goalsFor + homeTeamScore;
  obj.goalsAgainst = obj.goalsAgainst + awayTeamScore;
  obj.points = obj.points + point;
  ++obj.matchPlayed;
  return obj;
};
export const getLeaderboardData = (teams) => {
  let allHomeTeams = teams?.map((item) => item?.homeTeam);
  let allAwayTeams = teams?.map((item) => item?.awayTeam);
  let allTeams = [...allHomeTeams, ...allAwayTeams];
  let uniqueTeams = allTeams?.filter(
    (team, index) => allTeams?.indexOf(team) === index
  );
  let result = [];
  let obj = { ...INITIAL_LEADERBOARD_DETAIL };
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
              matchDrawPoint
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
    obj = { ...INITIAL_LEADERBOARD_DETAIL };
  }
  const sortData = sortedTeams(result);
  return sortData;
};
