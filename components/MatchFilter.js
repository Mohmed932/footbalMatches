"use client";
import {
  GetMatchsToday,
  GetMatchsTomorrow,
  GetMatchsYesterday,
} from "@/app/actions";
import React, { useState } from "react";

const MatchFilter = ({ setGetMatchs }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectDay, setSelectDay] = useState("اليوم");

  const handleSelectDay = async (day) => {
    setSelectDay(day);
    switch (day) {
      case "اليوم":
        setGetMatchs(await GetMatchsToday());
        break;
      case "غدا":
        setGetMatchs(await GetMatchsTomorrow());
        break;
      case "امس":
        setGetMatchs(await GetMatchsYesterday());
        break;
      default:
        break;
    }
  };

  const allChampions = [
    { kind: "الكرة المصرية" },
    { kind: "الدوري المصري" },
    { kind: "الكرة الأوروبية" },
    { kind: "منتخب مصر" },
    { kind: "سعودي في الجول" },
    { kind: "الدوري الإنجليزي" },
    { kind: "الدوري الإسباني" },
    { kind: "كأس العالم للأندية" },
    { kind: "الدوري الإنجليزي الممتاز" },
    { kind: "الدوري الإيطالي" },
    { kind: "دوري أبطال إفريقيا" },
    { kind: "الدوري الألماني" },
    { kind: "كأس الكونفدرالية" },
    { kind: "دوري أبطال أوروبا" },
    { kind: "الدوري الفرنسي" },
    { kind: "الدوري السعودي للمحترفين" },
    { kind: "الدوري البرتغالي" },
  ];

  return (
    <div className="w-full my-5 flex items-center justify-between">
      <span></span>
      <div className="relative hidden">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          type="button"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          كل البطولات
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
          bg-white divide-y divide-nebg-neutral-800 rounded-lg shadow w-44 dark:bg-neutral-800`}
        >
          {allChampions.map(({ kind }, idx) => (
            <ul
              key={idx}
              className="py-2 text-sm text-nebg-neutral-800 dark:text-nebg-neutral-800"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    // Handle selection here if needed
                  }}
                >
                  {kind}
                </a>
              </li>
            </ul>
          ))}
        </div>
      </div>

      <div className="bg-neutral-700">
        <button
          className={`mx-5 p-3 text-xl ${
            selectDay === "غدا" ? "bg-neutral-900" : ""
          }`}
          onClick={() => handleSelectDay("غدا")}
        >
          غدا
        </button>
        <button
          className={`mx-5 p-3 text-xl ${
            selectDay === "اليوم" ? "bg-neutral-900" : ""
          }`}
          onClick={() => handleSelectDay("اليوم")}
        >
          اليوم
        </button>
        <button
          className={`mx-5 p-3 text-xl ${
            selectDay === "امس" ? "bg-neutral-900" : ""
          }`}
          onClick={() => handleSelectDay("امس")}
        >
          امس
        </button>
      </div>
    </div>
  );
};

export default MatchFilter;
