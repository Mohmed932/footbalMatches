"use client";
import { matchesData } from "@/app/actions";
import React, { useState, useEffect } from "react";

// Utility function to pad single digits with leading zero
const padZero = (num) => num.toString().padStart(2, "0");

const MatchFilter = ({ setGetMatchs }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectDay, setSelectDay] = useState("اليوم");
  const [championship, setChampionship] = useState({
    nameChampionship: "كل البطولات",
    championshipId: "",
  });

  const data = new Date();
  const getFullyear = data.getFullYear();
  const getMonth = data.getMonth() + 1;
  const getDay = data.getDate();

  // Calculate dates with leading zeros
  const yasterday = `${getFullyear}-${padZero(getMonth)}-${padZero(
    getDay - 1
  )}`;
  const today = `${getFullyear}-${padZero(getMonth)}-${padZero(getDay)}`;
  const tomorrow = `${getFullyear}-${padZero(getMonth)}-${padZero(getDay + 1)}`;

  useEffect(() => {
    const fetchMatches = async () => {
      let date;
      switch (selectDay) {
        case "اليوم":
          date = today;
          break;
        case "غدا":
          date = tomorrow;
          break;
        case "امس":
          date = yasterday;
          break;
        default:
          return;
      }
      setGetMatchs(await matchesData(championship.championshipId, date));
    };
    fetchMatches();
  }, [championship, selectDay, setGetMatchs]);

  const allChampions = [
    { nameChampionship: "كل البطولات", championshipId: "" },
    { nameChampionship: "الدوري المصري", championshipId: "1267" },
    { nameChampionship: "الدوري الإنجليزي", championshipId: "1362" },
    { nameChampionship: "الدوري الإسباني", championshipId: "1367" },
    { nameChampionship: "الدوري الإيطالي", championshipId: "1373" },
    { nameChampionship: "دوري أبطال إفريقيا", championshipId: "1383" },
    { nameChampionship: "الدوري الألماني", championshipId: "1370" },
    { nameChampionship: "دوري أبطال أوروبا", championshipId: "1384" },
    { nameChampionship: "كأس الكونفدرالية", championshipId: "1386" },
    { nameChampionship: "الدوري الفرنسي", championshipId: "1379" },
    { nameChampionship: "الدوري البرتغالي", championshipId: "1380" },
    { nameChampionship: "الدوري السعودي للمحترفين", championshipId: "1365" },
    { nameChampionship: "كأس السوبر الإفريقي", championshipId: "1372" },
    { nameChampionship: "دوري المؤتمر الأوروبي", championshipId: "1391" },
    { nameChampionship: "تصفيات كأس الأمم الإفريقية", championshipId: "1371" },
  ];

  const chooseChampionship = (nameChampionship, championshipId) => {
    setChampionship({ nameChampionship, championshipId });
    setShowDropdown(false);
  };

  return (
    <div className="w-full my-5 flex items-center justify-between max-sm:flex-col">
      <div className="max-sm:order-1 relative max-sm:my-5 max-sm:left-0 max-sm:w-full">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          type="button"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {championship.nameChampionship}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <div
          className={`z-10 ${showDropdown ? "visible" : "hidden"} 
          absolute
          bg-white divide-y divide-nebg-neutral-800 rounded-lg shadow w-60 `}
        >
          {allChampions.map(({ nameChampionship, championshipId }) => (
            <li
              key={championshipId}
              className="text-center p-2 list-none py-2 text-sm text-nebg-neutral-800 dark:text-nebg-neutral-800 cursor-pointer hover:bg-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-white"
              onClick={() =>
                chooseChampionship(nameChampionship, championshipId)
              }
            >
              {nameChampionship}
            </li>
          ))}
        </div>
      </div>

      <div className="shadow-xl max-sm:w-full flex items-center justify-center">
        <button
          className={`mx-5 p-3 text-xl ${
            selectDay === "غدا" ? "bg-red-700 text-white" : ""
          }`}
          onClick={() => setSelectDay("غدا")}
        >
          غدا
        </button>
        <button
          className={`mx-5 p-3 text-xl ${
            selectDay === "اليوم" ? "bg-red-700 text-white" : ""
          }`}
          onClick={() => setSelectDay("اليوم")}
        >
          اليوم
        </button>
        <button
          className={`mx-5 p-3 text-xl ${
            selectDay === "امس" ? "bg-red-700 text-white" : ""
          }`}
          onClick={() => setSelectDay("امس")}
        >
          امس
        </button>
      </div>
    </div>
  );
};

export default MatchFilter;
