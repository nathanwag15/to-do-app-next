import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Moment from "react-moment";
import moment from "moment";
import DisplayTaskList from "../components/displaytaskList";

import React, { useState } from "react";

export default function Home() {
  const [dailyTasksToday, setDailyTasksToday] = useState([
    "eat chicken",
    "eat chicken",
    "eat chicken",
    "eat chicken",
  ]);

  const [dailyTasksTomorrow, setDailyTasksTomorrow] = useState([
    "eat ham",
    "eat ham",
    "eat ham",
  ]);

  const current = new Date();
  const currentDate = moment().format("dddd, MMM Do YY");
  const tomorrowDate = moment().add(1, "days").calendar("dddd");
  const threeDayDate = moment().add(2, "days").calendar("dddd");
  const fourDayDate = moment().add(2, "days").calendar("dddd");
  const fiveDayDate = moment().add(2, "days").calendar("dddd");
  const sixDayDate = moment().add(2, "days").calendar("dddd");
  const sevenDayDate = moment().add(2, "days").calendar("D");

  return (
    <div className=" week-page-wrapper bg-white">
      <div className="text-3xl font-bold text-dark-blue">Week in Review</div>
      <div className="week-wrapper">
        <div className="day-wrapper border-2 border-solid border-dark-blue">
          <div className="day-title text-xl text-medium-blue">
            {currentDate}
          </div>
          <DisplayTaskList task={dailyTasksToday} />
        </div>
        <div className="day-wrapper border-2 border-solid border-dark-blue">
          <div className="day-title text-2xl text-medium-blue">
            {tomorrowDate}
          </div>
          <div className="day-todo-list">
            <DisplayTaskList task={dailyTasksTomorrow} />
          </div>
        </div>
        <div className="day-wrapper border-2 border-solid border-dark-blue">
          <div className="day-title text-2xl text-medium-blue">
            {threeDayDate}
          </div>
          <div className="day-todo-list">
            <DisplayTaskList task={dailyTasksToday} />
          </div>
        </div>
        <div className="day-wrapper border-2 border-solid border-dark-blue">
          <div className="day-title text-2xl text-medium-blue">
            {fourDayDate}
          </div>
          <div className="day-todo-list">
            <DisplayTaskList task={dailyTasksToday} />
          </div>
        </div>
        <div className="day-wrapper border-2 border-solid border-dark-blue">
          <div className="day-title text-2xl text-medium-blue">
            {fiveDayDate}
          </div>
          <div className="day-todo-list">
            <DisplayTaskList task={dailyTasksToday} />
          </div>
        </div>
        <div className="day-wrapper border-2 border-solid border-dark-blue">
          <div className="day-title text-2xl text-medium-blue">
            {sixDayDate}
          </div>
          <div className="day-todo-list">
            <DisplayTaskList task={dailyTasksToday} />
          </div>
        </div>
        <div className="day-wrapper border-2 border-solid border-dark-blue">
          <div className="day-title text-2xl text-medium-blue">
            {sevenDayDate}
          </div>
          <div className="day-todo-list">
            <DisplayTaskList task={dailyTasksToday} />
          </div>
        </div>
      </div>
      Hello There
    </div>
  );
}
