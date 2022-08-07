import React, { useState, useEffect } from "react";
import LeagueService from "../../services/LeagueService";
import FooterView from "./FooterView";
const Footer = () => {
  const http = new LeagueService();
  const [version, setVersion] = useState("");
  useEffect(() => {
    // fetching version

    const getVersion = async () => {
      try {
        const response = await http.fetchVersion();
        if (response.status === 200 || response.status === 201) {
          let result = await response.json();
          setVersion(result.version);
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    getVersion();
  }, []);

  return <FooterView version={version} />;
};

export default Footer;
