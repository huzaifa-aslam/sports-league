import { getAllMatches, getAccessToken, v1, version } from "../constants";
import { callGetAPI, fetchMatches, getLeaderboardData } from "../helper";
import { toast } from "react-toastify";
/**
 * A class representing a service that processes the data for match schedule
 * and generates leaderboard.
 *
 * NOTE: MAKE SURE TO IMPLEMENT ALL EXISITNG METHODS BELOW AND
 *       PLEASE DO NOT RENAME, MOVE OR DELETE THIS FILE.
 */
class LeagueService {
  /**
   * Sets the match schedule.
   * Match schedule will be given in the following form:
   * [
   *      {
   *          matchDate: [TIMESTAMP],
   *          stadium: [STRING],
   *          homeTeam: [STRING],
   *          awayTeam: [STRING],
   *          matchPlayed: [BOOLEAN],
   *          homeTeamScore: [INTEGER],
   *          awayTeamScore: [INTEGER]
   *      },
   *      {
   *          matchDate: [TIMESTAMP],
   *          stadium: [STRING],
   *          homeTeam: [STRING],
   *          awayTeam: [STRING],
   *          matchPlayed: [BOOLEAN],
   *          homeTeamScore: [INTEGER],
   *          awayTeamScore: [INTEGER]
   *      }
   * ]
   *
   * @param {Array} matches List of matches.
   */
  allMatches = [];
  setMatches(matches) {
    this.allMatches = matches;
  }
  /**
   * Returns the full list of matches.
   *
   * @returns {Array} List of matches.
   */
  getMatches() {
    return this.allMatches;
  }

  /**
   * Returns the leaderboard in a form of a list of JSON objecs.
   *
   * [
   *      {
   *          teamName: [STRING]',
   *          matchesPlayed: [INTEGER],
   *          goalsFor: [INTEGER],
   *          goalsAgainst: [INTEGER],
   *          points: [INTEGER]
   *      },
   * ]
   *
   * @returns {Array} List of teams representing the leaderboard.
   */
  getLeaderboard(teams) {
    let leaderBoardData = getLeaderboardData(teams);
    return leaderBoardData;
  }

  /**
   * Asynchronic function to fetch the data from the server.
   */
  async fetchData() {
    try {
      let url = `${v1}${getAllMatches}`;
      const response = await fetchMatches(url, "GET");
      if (response.status === 200 || response.status === 201) {
        let result = await response.json();
        this.setMatches(result.matches);
        return result;
      } else {
        toast.error("Something Went Wrong!");
      }
    } catch (error) {
      toast.error("Something Went Wrong!");
    }
  }

  async fetchVersion() {
    try {
      const response = await callGetAPI(version, "GET");
      return response;
    } catch (error) {
      toast.error("Something Went Wrong!");
    }
  }
  async fetchAccessToken() {
    try {
      let url = `${v1}${getAccessToken}`;
      const response = await callGetAPI(url, "GET");
      return response;
    } catch (error) {
      toast.error("Something Went Wrong!");
    }
  }
}

export default LeagueService;
