import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "../constants";
import LeagueService from "../services/LeagueService";
import { toast } from "react-toastify";
const Routes = () => {
  const http = new LeagueService();

  // useEffect(() => {
  //   // fetching access_token then saving in localStorage
  //   const getAccessToken = async () => {
  //     try {
  //       const response = await http.fetchAccessToken();
  //       if (response?.status === 200 || response?.status === 201) {
  //         let result = await response.json();
  //         localStorage.setItem("authToken", result.access_token);
  //       } else {
  //         toast.error("Something Went Wrong!");
  //       }
  //     } catch (error) {
  //       toast.error("Something Went Wrong!");
  //     }
  //   };

  //   getAccessToken();
  // }, []);
  return (
    <Switch>
      {routes.map(({ path, component }) => {
        return <Route key={path} exact path={path} component={component} />;
      })}
    </Switch>
  );
};

export default Routes;
