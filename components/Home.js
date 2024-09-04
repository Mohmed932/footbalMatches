"use client"
import React, { useState } from "react";
import MatchFilter from "./MatchFilter";
import ItemsOfMatchs from "./ItemsOfMatchs";

const Home = ({ matchs }) => {
  const [getMatchs, setGetMatchs] = useState(matchs);
  return (
    <div className="flex items-center justify-center h-full backdrop-blur-lg">
      <div className="w-2/4 h-2/3">
        <MatchFilter setGetMatchs={setGetMatchs} />
        <ItemsOfMatchs matchs={getMatchs} />
      </div>
    </div>
  );
};

export default Home;
