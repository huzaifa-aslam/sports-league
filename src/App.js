import React, { useEffect, useState } from "react";
import Routes from "./routes";
import LeagueService from "./services/LeagueService";
import { toast } from "react-toastify";
function App() {
  const http = new LeagueService();
  const [authToken, setAuthToken] = useState("");
  useEffect(() => {
    let auth = localStorage.getItem("authToken");
    if (auth) {
      setAuthToken(auth);
    } else {
      getAccessToken();
    }
  }, []);
  // fetching access_token then saving in localStorage
  const getAccessToken = async () => {
    try {
      const response = await http.fetchAccessToken();
      if (response?.status === 200 || response?.status === 201) {
        let result = await response.json();
        setAuthToken(result.access_token);
        localStorage.setItem("authToken", result.access_token);
      } else {
        toast.error("Something Went Wrong!");
      }
    } catch (error) {
      toast.error("Something Went Wrong!");
    }
  };
  return authToken ? (
    <Routes />
  ) : (
    <p className="d-flex text-center vh-100 align-items-center justify-content-center">
      Loading...
    </p>
  );
}

export default App;
