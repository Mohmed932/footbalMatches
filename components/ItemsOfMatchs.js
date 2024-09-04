import MatchDetails from "./MatchDetails";
import Score from "./Score";

const ItemsOfMatchs = ({ matchs }) => {
  return (
    <div className="p-5 rounded-lg bg-[#ffffff33] w-full h-full  overflow-auto">
      {matchs.length === 0 ? (
        <h1 className=" text-center text-xl">لا توجد مباريات</h1>
      ) : (
        matchs.map(
          (
            {
              AwayTeamLogoUrl,
              AwayTeamName,
              ChampionshipName,
              HomeTeamLogoUrl,
              HomeTeamName,
              StadiumName,
              TvCoverage,
              WeekOrRound,
              CurrentMatchStatus,
              HomeScore,
              AwayScore,
              Date,
            },
            idx
          ) => (
            <div key={idx} className="border-b-2 my-5 border-neutral-700">
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center justify-center flex-col">
                  <img
                    src={HomeTeamLogoUrl}
                    alt={HomeTeamName}
                    className="w-24 max-sm:w-16"
                  />
                  <span>{HomeTeamName}</span>
                </div>
                <div className="w-2/6 max-md:w-2/5 max-sm:w-2/4">
                  <Score
                    HomeScore={HomeScore}
                    CurrentMatchStatus={CurrentMatchStatus}
                    AwayScore={AwayScore}
                  />
                </div>
                <div className="flex items-center justify-center flex-col">
                  <img
                    src={AwayTeamLogoUrl}
                    alt={AwayTeamName}
                    className="w-24 max-sm:w-16"
                  />
                  <span>{AwayTeamName}</span>
                </div>
              </div>
              <MatchDetails
                TvCoverage={TvCoverage}
                StadiumName={StadiumName}
                ChampionshipName={ChampionshipName}
                WeekOrRound={WeekOrRound}
                idx={idx}
                date={Date}
              />
            </div>
          )
        )
      )}
    </div>
  );
};

export default ItemsOfMatchs;
