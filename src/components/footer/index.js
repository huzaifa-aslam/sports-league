import React, { useState, useEffect } from "react";
import LeagueService from "../../services/LeagueService";
import FooterView from "./FooterView";
import { toast } from "react-toastify";
const Footer = () => {
  const http = new LeagueService();
  const [version, setVersion] = useState("");
  useEffect(() => {
    // fetching version

    getVersion();
  }, []);
  const getVersion = async () => {
    try {
      const response = await http.fetchVersion();
      if (response.status === 200 || response.status === 201) {
        let result = await response.json();
        setVersion(result.version);
      }
    } catch (error) {
      toast.error("Something Went Wrong!");
    }
  };

  return <FooterView version={version} />;
};

export default Footer;
