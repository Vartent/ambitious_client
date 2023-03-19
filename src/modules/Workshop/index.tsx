import * as React from "react";

import { DatePicker } from "antd";
import { Moment } from "moment";
import { useSelector } from "react-redux";

import GantChart from "@modules/Gant";
import "antd/dist/antd.css";
import { updateGantPeriod } from "@store/Gant";
import { useAppDispatch, RootState } from "@store/index";

const Workshop = () => {
  const dispatch = useAppDispatch();
  const { period } = useSelector((state: RootState) => state.gant);

  const onChangeStartDate = (value: Moment | null) => {
    dispatch(updateGantPeriod({ ...period, startDate: value }));
  };

  const onChangeFinishDate = (value: Moment | null) => {
    dispatch(updateGantPeriod({ ...period, finishDate: value }));
  };

  return (
    <>
      <div>
        startDate:{" "}
        <DatePicker
          value={period.startDate}
          onChange={(value) => onChangeStartDate(value)}
        />
      </div>
      <div>
        finishDate:{" "}
        <DatePicker
          value={period.finishDate}
          onChange={(value) => onChangeFinishDate(value)}
        />
      </div>

      <GantChart />
    </>
  );
};

export default Workshop;
