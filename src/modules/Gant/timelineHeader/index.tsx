import { useSelector } from "react-redux";

import { RootState } from "@store/index";

import styles from "./styles.module.scss";
import TimelineComponent from "./timelineComponent";
import { TimelineElementType } from "./timelineHeader.type";
const TimelineHeader = () => {
  const { scale } = useSelector((state: RootState) => state.project);

  return (
    <div className={styles["timeline-container"]}>
      <TimelineComponent type={TimelineElementType.year} />
      <TimelineComponent type={TimelineElementType.month} />
      <TimelineComponent visible={scale >= 4} type={TimelineElementType.week} />
      <TimelineComponent
        visible={scale >= 20.5}
        type={TimelineElementType.day}
      />
    </div>
  );
};

export default TimelineHeader;
