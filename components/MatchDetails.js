"use client";

import { useState } from "react";

const MatchDetails = ({
  TvCoverage,
  StadiumName,
  ChampionshipName,
  WeekOrRound,
  idx,
  date,
}) => {
  const [show, setShow] = useState(false);
  const handelShow = (idx) => {
    show === idx ? setShow(null) : setShow(idx);
  };
  const matchHour = (dateString) => {
    const timestamp = parseInt(dateString.match(/\/Date\((\d+)\)\//)[1]);
    const date = new Date(timestamp);
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    const formattedTime = date.toLocaleTimeString("ar-EG", options);
    return formattedTime;
  };
  return (
    <div className="overflow-hidden">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => handelShow(idx)}
      >
        <span className="text-xl my-5">{show === idx ? "-" : "+"}</span>
        <h3 className="text-xl my-5">تفاصيل المباره</h3>
      </div>
      <div
        className={`bg-neutral-900 delay-500 ${
          show === idx ? "h-auto" : "max-h-0"
        }`}
      >
        <div className="p-3">
          <div className="w-full flex items-center justify-between">
            <span>
              {TvCoverage[0]?.CommenterName
                ? TvCoverage[0]?.CommenterName
                : "غير معروف"}
            </span>
            <span>المعلق</span>
          </div>
          <div className="w-full flex items-center justify-between">
            <span>
              {TvCoverage[0]?.TvChannelName
                ? TvCoverage[0]?.TvChannelName
                : "غير معروف"}
            </span>
            <span>القناه الناقله</span>
          </div>
          <div className="w-full flex items-center justify-between">
            <span>{StadiumName ? StadiumName : "غير معروف"}</span>
            <span>الاستاد</span>
          </div>
          <div className="w-full flex items-center justify-between">
            <span>{ChampionshipName ? ChampionshipName : "غير معروف"}</span>
            <span>اسم البطوله</span>
          </div>
          <div className="w-full flex items-center justify-between">
            <span>{WeekOrRound ? WeekOrRound : "غير معروف"}</span>
            <span>دور</span>
          </div>
          <div className="w-full flex items-center justify-between">
            <span>{matchHour(date)}</span>
            <span>الساعه</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchDetails;
