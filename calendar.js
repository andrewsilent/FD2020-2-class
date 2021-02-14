"use strict";

const month = document.querySelector(".month");
const dayOfWeek = document.querySelector(".day-of-week");
const dayList = document.querySelector(".day-list");

function getStart(someDate = new Date()) {
  const local = new Date(someDate); // immutable local date
  const day = new Date(local.setDate(1)); // first day of current month
  return new Date(day.setDate(-day.getDay() + day.getDate())); // get sunday
  // if (day.getDay() > 0) { // if it is not Sunday
  //   return new Date(day.setDate(1 - day.getDay())); // find closest Sunday, return
  // }
  // return day; // if it is Sunday, return
}

function getFinish(someDate = new Date()) {
  const day = new Date(someDate);
  const firstDayOfNextMonth = new Date(
    new Date(day.setMonth(day.getMonth() + 1)).setDate(1)
  );
  return new Date(
    firstDayOfNextMonth.setDate(
      6 - firstDayOfNextMonth.getDay() + firstDayOfNextMonth.getDate()
    )
  ); // get saturday
}

function monthArray(someDate = new Date()) {
  const start = getStart(someDate);
  const finish = getFinish(someDate);
  const monthArray = [];
  let day = start;
  monthArray.push(getStart(someDate)); // some reason if i push 'start' or 'day', pushed element turns into next day, not start day
  while (day < finish) {
    monthArray.push(day);
    day = new Date(day.setDate(day.getDate() + 1));
  }
  return monthArray;
}

(function commonTest() {
  const prevMonth = new Date(new Date().setMonth(new Date().getMonth() - 1));
  const nextMonth = new Date(new Date().setMonth(new Date().getMonth() + 1));
  const nextMonth2 = new Date(new Date().setMonth(new Date().getMonth() + 2));
  const nextMonth3 = new Date(new Date().setMonth(new Date().getMonth() + 3));

  document.body.append(createElement("p", `prev month`));
  monthArray(prevMonth).map((e) => {
    document.body.append(
      createElement("p", `${e.getDay()} ${e.getDate()} ${e.getMonth()}`)
    );
  });

  document.body.append(createElement("p", `current month`));
  monthArray().map((e) => {
    document.body.append(
      createElement("p", `${e.getDay()} ${e.getDate()} ${e.getMonth()}`)
    );
  });

  document.body.append(createElement("p", `next month`));
  monthArray(nextMonth).map((e) => {
    document.body.append(
      createElement("p", `${e.getDay()} ${e.getDate()} ${e.getMonth()}`)
    );
  });

  document.body.append(createElement("p", `next next month`));
  monthArray(nextMonth2).map((e) => {
    document.body.append(
      createElement("p", `${e.getDay()} ${e.getDate()} ${e.getMonth()}`)
    );
  });

  document.body.append(createElement("p", `next next next month`));
  monthArray(nextMonth3).map((e) => {
    document.body.append(
      createElement("p", `${e.getDay()} ${e.getDate()} ${e.getMonth()}`)
    );
  });

  function createElement(element, text) {
    let item = document.createElement(element);
    item.textContent = text;
    return item;
  }
})();
