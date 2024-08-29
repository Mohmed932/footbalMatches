"use server";

const data = new Date();
const getFullyear = data.getFullYear();
const getMonth = data.getMonth() + 1;
const getDay = data.getDate();

// get matches today
export async function GetMatchsToday() {
  try {
    const req = await fetch(
      `https://www.filgoal.com/matches/ajaxlist?date=${getFullyear}-${getMonth}-${getDay}`,
      {
        cache: "no-cache", // Ensures that the request is not served from the cache
      }
    );
    const res = await req.json();
    return res;
  } catch (error) {
    return error;
  }
}
// get matches tomorrow
export async function GetMatchsTomorrow() {
  try {
    const req = await fetch(
      `https://www.filgoal.com/matches/ajaxlist?date=${getFullyear}-${getMonth}-${
        getDay + 1
      }`,
      {
        cache: "no-cache", // Ensures that the request is not served from the cache
      }
    );
    const res = await req.json();
    return res;
  } catch (error) {
    return error;
  }
}
// get matches yesterday
export async function GetMatchsYesterday() {
  try {
    const req = await fetch(
      `https://www.filgoal.com/matches/ajaxlist?date=${getFullyear}-${getMonth}-${
        getDay - 1
      }`,
      {
        cache: "no-cache", // Ensures that the request is not served from the cache
      }
    );
    const res = await req.json();
    return res;
  } catch (error) {
    return error;
  }
}
