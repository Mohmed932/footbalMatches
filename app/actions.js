"use server";

export const matchesData = async (championshipId, date) => {
  try {
    const req = await fetch(
      `https://www.filgoal.com/matches/ajaxlist?championshipId=${championshipId}&date=${date}`,
      {
        cache: "no-cache", // Ensures that the request is not served from the cache
      }
    );
    const res = await req.json();
    return res;
  } catch (error) {
    return error;
  }
};
