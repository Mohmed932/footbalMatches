import React from "react";

const Score = ({ HomeScore, CurrentMatchStatus, AwayScore }) => {
  return (
    <div className="w-full flex items-center justify-between ">
      <span className="text-3xl">{HomeScore ? HomeScore : "-"}</span>
      <button className="bg-red-600 p-3 min-w-40 max-sm:p-1 max-sm:min-w-24">
        {CurrentMatchStatus.MatchStatusName}
      </button>
      <span className="text-3xl">{AwayScore ? AwayScore : "-"}</span>
    </div>
  );
};

export default Score;
