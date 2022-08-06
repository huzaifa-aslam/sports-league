import { baseUrl } from "./../baseUrl";
export const callAPI = async (url, method, body) => {
  const response = await fetch(`${baseUrl}${url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(body),
  });

  return response;
};

export const authAPI = async (url, method) => {
  const response = await fetch(`${baseUrl}${url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${localStorage.getItem("auth")}`,
    },
  });

  return response.text();
};
