import Home from "@/components/Home";
import React from "react";
import { matchesData } from "./actions";

const data = new Date();
const getFullyear = data.getFullYear();
const getMonth = data.getMonth() + 1;
const getDay = data.getDate();

const date = `${getFullyear}-${getMonth}-${getDay}`;
const Page = async () => {
  const matchs = await matchesData("", date);
  return <Home matchs={matchs} />;
};

export default Page;
