import { baseUrl } from "../constants";

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
