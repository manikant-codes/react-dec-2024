import React from "react";
import "./stats.css";
import StatsCard from "./StatsCard";
import {
  faTrophy,
  faBriefcase,
  faChartLine,
  faAward
} from "@fortawesome/free-solid-svg-icons";

function Stats() {
  console.log("Stats");
  return (
    <div className="stats-container">
      <StatsCard
        icon={faTrophy}
        title="3x Won Awards"
        desc="Vestibulum ante ipsum"
      />
      <StatsCard
        icon={faBriefcase}
        title="6.5k Faucibus"
        desc="Nullam quis ante"
      />
      <StatsCard
        icon={faChartLine}
        title="80k Mauris"
        desc="Etiam sit amet orci"
      />
      <StatsCard
        icon={faAward}
        title="6x Phasellus"
        desc="Vestibulum ante ipsum"
      />
    </div>
  );
}

export default Stats;
