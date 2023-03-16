import { useSelector } from "react-redux";

import { RootState } from "@store/index";
import { Period } from "@store/Project/Project.types";

import { getDays, getMonths, getWeeks, getYears } from "./methods";
import styles from "./styles.module.scss";
import {
  ElementChildProps,
  HeaderElement,
  HeaderElementList,
  Props,
  TimelineElementType,
  TimelineElementChildDay,
  TimelineElementChildWeek,
  TimelineElementChildMonth,
  TimelineElementChildYear,
} from "./timelineHeader.type";

const TimelineComponent = ({ type, visible = true }: Props) => {
  const { period, scale } = useSelector((state: RootState) => state.project);

  const ElementChild = ({ element, elementSize }: ElementChildProps) => {
    switch (element.type) {
      case TimelineElementType.day:
        return <div>{(element.children as TimelineElementChildDay).date}</div>;
      case TimelineElementType.week:
        return (
          <div>{(element.children as TimelineElementChildWeek).weekIndex}</div>
        );
      case TimelineElementType.month:
        return (
          <div>
            {elementSize >= 84
              ? (element.children as TimelineElementChildMonth).monthName
              : elementSize > 20
              ? (element.children as TimelineElementChildMonth).monthNum
              : null}
          </div>
        );
      case TimelineElementType.year:
        return (
          <div>
            {elementSize >= 40
              ? (element.children as TimelineElementChildYear).yearNum
              : (element.children as TimelineElementChildYear).yearShortNum}
          </div>
        );
      default:
        return null;
    }
  };

  const renderElement = (element: HeaderElement) => {
    const elementSize = element.duration * scale;

    //move jsx wrap here, methods.tsx edit
    return (
      <div
        className={styles["timeline-element"]}
        style={{
          width: `${elementSize}px`,
        }}
      >
        <ElementChild element={element} elementSize={elementSize} />
      </div>
    );
  };

  const renderElementRow = (
    callback: (interval: Period) => HeaderElementList
  ) => {
    return (
      <div className={styles["timeline-component"]}>
        {callback(period).map(renderElement)}
      </div>
    );
  };

  if (visible) {
    switch (type) {
      case TimelineElementType.year:
        return renderElementRow(getYears);
      case TimelineElementType.day:
        return renderElementRow(getDays);
      case TimelineElementType.month:
        return renderElementRow(getMonths);
      case TimelineElementType.week:
        return renderElementRow(getWeeks);
      default:
        return null;
    }
  } else {
    return null;
  }
};

export default TimelineComponent;
