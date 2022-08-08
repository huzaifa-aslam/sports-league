// ********* components***************

import Leaderboard from "../pages/leaderboard";
import NotFound from "../pages/notFound";
import Schedule from "../pages/schedule";

// ********* base url***************

export const flagUrl = `https://countryflagsapi.com/png/`;

// ********* base url***************

export const baseUrl = "http://localhost:3001/api";
// ********* end points***************

export const v1 = "/v1";
export const version = "/version";
export const getAccessToken = "/getAccessToken";
export const getAllMatches = "/getAllMatches";
// ********* page routes***************
export const schedule = "/schedule";
export const leaderBoard = "/leaderboard";
export const slash = "/";
export const notFound = "/*";

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
