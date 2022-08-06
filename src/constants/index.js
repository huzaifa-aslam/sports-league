import Leaderboard from "../pages/leaderboard";
import NotFound from "../pages/notFound";
import Schedule from "../pages/schedule";

export const url = "http://localhost:3001/api";
export const v1 = "/v1/";
export const version = "version";
export const getToken = "getAccessToken";
export const getMatches = "getAllMatches";
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
