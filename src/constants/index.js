// ********* components***************

import Leaderboard from "../pages/leaderboard";
import NotFound from "../pages/notFound";
import Schedule from "../pages/schedule";

// ********* base url***************

export const flagUrl = `https://countryflagsapi.com/png/`;

// ********* base url***************

export const baseUrl = "http://localhost:3001/api";
// ********* end points***************

export const v1 = "/v1/";
export const version = "/version";
export const getAccessToken = "getAccessToken";
export const getAllMatches = "getAllMatches";
// ********* page routes***************
export const schedule = "/schedule";
export const leaderBoard = "/leaderboard";
export const slash = "/";
export const notFound = "/*";

// ********* basic constant***************
export const matchDrawPoint = 1;
export const matchWonPoint = 3;
export const matchLostPoint = 0;

// *********component routes***************

export const INITIAL_LEADERBOARD_DETAIL = {
  teamName: "",
  matchPlayed: 0,
  goalsFor: 0,
  goalsAgainst: 0,
  points: 0,
};

// *********component routes***************

export const routes = [
  {
    path: slash,
    component: Schedule,
  },
  {
    path: schedule,
    component: Schedule,
  },
  {
    path: leaderBoard,
    component: Leaderboard,
  },
  {
    path: notFound,
    component: NotFound,
  },
];
