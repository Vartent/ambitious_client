import * as React from "react";
import { useEffect, useState } from "react";

import { DatePicker, DatePickerProps, InputNumber, List } from "antd";
import {
  RangePickerBaseProps,
  RangePickerProps,
  RangePickerTimeProps,
} from "antd/lib/date-picker/generatePicker";
import moment, { Moment } from "moment";
import { RangeValue } from "rc-picker/lib/interface";

import GantChart from "@modules/Gant";
import TimelineHeader from "@modules/Gant/timelineHeader";
import "antd/dist/antd.css";
import { useAppDispatch } from "@store/index";
import { updateGantPeriod, updateGantScale } from "@store/Project";
import { Period } from "@store/Project/Project.types";

const Workshop = () => {
  const dispatch = useAppDispatch();

  const initialState: Period = {
    finishDate: null,
    startDate: null,
  };
  const [selectedPeriod, setSelectedPeriod] = useState<Period>(initialState);

  const onChangeFinishDate = (value: Moment | null) => {
    setSelectedPeriod({ ...selectedPeriod, finishDate: value });
  };

  const onChangeStartDate = (value: Moment | null) => {
    setSelectedPeriod({ ...selectedPeriod, startDate: value });
  };

  const onChangeScale = (value: number | null) => {
    value && dispatch(updateGantScale(value));
  };

  useEffect(() => {
    selectedPeriod.finishDate &&
      selectedPeriod.startDate &&
      dispatch(updateGantPeriod(selectedPeriod));
  }, [selectedPeriod]);

  return (
    <>
      <div>
        startDate:{" "}
        <DatePicker
          value={selectedPeriod.startDate}
          onChange={(value) => onChangeStartDate(value)}
        />
      </div>
      <div>
        finishDate:{" "}
        <DatePicker
          value={selectedPeriod.finishDate}
          onChange={(value) => onChangeFinishDate(value)}
        />
      </div>
      <div>
        Scale:{" "}
        <span>
          <InputNumber onChange={onChangeScale} />
        </span>
      </div>

      <GantChart />
    </>
  );
};

export default Workshop;
