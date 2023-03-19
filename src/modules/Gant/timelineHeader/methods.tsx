import moment from "moment";
import { useSelector } from "react-redux";

import { Period } from "@store/Gant/Gant.types";
import { RootState } from "@store/index";

import { HeaderElementList, TimelineElementType } from "./timelineHeader.type";

//edit so it doesnt return jsx. new type: HeaderElement = {duration, children: {according to type}, type}
export const getDays = (interval: Period): HeaderElementList => {
  const days: HeaderElementList = [];

  if (
    interval &&
    interval.finishDate &&
    interval.startDate &&
    interval.startDate <= interval.finishDate
  ) {
    const date = moment(interval.startDate);

    while (date <= interval.finishDate) {
      days.push({
        children: {
          date: date.date(),
          day: date.day(),
          fullDate: date.clone(),
        },
        duration: 1,
        type: TimelineElementType.day,
      });
      date.add(1, "day");
    }
  }

  return days;
};

export const getMonths = (interval: Period): HeaderElementList => {
  const { scale } = useSelector((state: RootState) => state.gant);

  const months: HeaderElementList = [];

  const date = moment(interval.startDate);
  const fDate = moment(interval.finishDate);

  if (date && interval.finishDate && interval.startDate) {
    while (date.endOf("month") <= fDate.endOf("month")) {
      months.push({
        type: TimelineElementType.month,
        children: {
          monthName: date.format("MMMM"),
          monthNum: date.month(),
        },
        duration: date?.daysInMonth(),
      });
      date.add(1, "month");
    }
    months[months.length - 1].duration = interval.finishDate.date();
    months[0].duration = months[0].duration - interval.startDate?.date() + 1;
  }

  return months;
};

export const getYears = (interval: Period): HeaderElementList => {
  const years: HeaderElementList = [];

  if (
    interval &&
    interval.finishDate &&
    interval.startDate &&
    interval.startDate <= interval.finishDate
  ) {
    const date = moment(interval.startDate);

    while (date.year() <= interval.finishDate.year()) {
      years.push({
        type: TimelineElementType.year,
        children: {
          yearNum: date.year(),
          yearShortNum: Number(date.format("YYYY").slice(-2)),
        },
        duration: date.isLeapYear() ? 366 : 365,
      });
      date.add(1, "year");
    }

    years[years.length - 1].duration = interval.finishDate.dayOfYear();
    if (years.length != 2) {
      years[0].duration = years[0].duration - date.dayOfYear() + 1;
    } else {
      years[0].duration = years[0].duration - date.dayOfYear() + 2;
    }
  }

  return years;
};

export const getWeeks = (interval: Period): HeaderElementList => {
  const weeks: HeaderElementList = [];

  const date = moment(interval.startDate);

  if (date && interval.finishDate && interval.startDate) {
    const daysAmount = interval.finishDate.diff(interval.startDate, "days");

    const weeksAmount =
      interval.finishDate.day() < interval.startDate.day()
        ? Math.floor(daysAmount / 7) + 1
        : Math.floor(daysAmount / 7);

    for (let i = 0; i <= weeksAmount; i++) {
      weeks.push({
        duration: 7,
        children: {
          weekIndex: i + 1,
        },
        type: TimelineElementType.week,
      });
    }

    if (date.day() != 0) {
      weeks[weeks.length - 1].duration = interval.finishDate.day();
      weeks[0].duration = weeks[0].duration - date.day() + 1;
    } else {
      weeks.push({
        duration: 7,
        children: {
          weekIndex: weeks.length + 1,
        },
        type: TimelineElementType.week,
      });
      weeks[weeks.length - 1].duration = interval.finishDate.day();
      weeks[0].duration = 1;
    }

    if (interval.finishDate.day() == 0) {
      weeks.pop();
    }
  }

  return weeks;
};
