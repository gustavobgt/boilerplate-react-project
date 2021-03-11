import React from "react";
import HomeView from "./Home.view";
import { Link } from "react-router-dom";
import { DASHBOARD, PAGE1 } from "../../navigation/CONSTANTS";

export const HomeContainer: React.FC = ()  => {
  return (
    <div>
      <Link to={DASHBOARD}>Dashboard</Link>
      <Link to={PAGE1}>Page 1</Link>
      <HomeView title="Home" />
    </div>
  );
}
