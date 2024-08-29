import Home from "@/components/Home";
import React from "react";
import { GetMatchsToday } from "./actions";

const Page = async () => {
  const matchs = await GetMatchsToday();
  return <Home matchs={matchs} />;
};

export default Page;
