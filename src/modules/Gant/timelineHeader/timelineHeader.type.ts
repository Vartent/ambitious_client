import { Moment } from "moment";

export type HeaderElement = {
  children:
    | TimelineElementChildDay
    | TimelineElementChildMonth
    | TimelineElementChildWeek
    | TimelineElementChildYear;
  duration: number;
  type: TimelineElementType;
};

export type ElementChildProps = {
  element: HeaderElement;
  elementSize: number;
};
export type HeaderElementList = HeaderElement[];

export enum TimelineElementType {
  day = "day",
  month = "month",
  week = "week",
  year = "year",
}

export type Props = {
  type: TimelineElementType;
  visible?: boolean;
};

export type TimelineElementChildDay = {
  date: number;
  day: number;
  fullDate: Moment;
};

export type TimelineElementChildWeek = {
  weekIndex: number;
};

export type TimelineElementChildMonth = {
  monthName: string;
  monthNum: number;
};

export type TimelineElementChildYear = {
  yearNum: number;
  yearShortNum: number;
};
