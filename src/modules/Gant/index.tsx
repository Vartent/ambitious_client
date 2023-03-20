import { useCallback, useEffect, useState } from "react";

import { Table, Slider, DatePicker, Input, InputNumber } from "antd";
import { ColumnsType } from "antd/lib/table";
import moment, { Moment } from "moment";
import { useSelector } from "react-redux";

import { updateGantScale } from "@store/Gant";
import { RootState, useAppDispatch } from "@store/index";

import { DataType } from "./index.type";
import styles from "./styles.module.scss";
import TimelineHeader from "./timelineHeader";

const GantChart = () => {
  const { scale } = useSelector((state: RootState) => state.gant);

  const [processDuration, setProcessDuration] = useState<number>(0);
  const dispatch = useAppDispatch();

  const scaleHandler = (value: number) => {
    dispatch(updateGantScale(value));
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      fixed: "left",
      onCell: () => ({ style: { width: "100px" } }),
    },
    {
      ellipsis: true,
      title: "Description",
      dataIndex: "description",
      fixed: "left",
      render: (text) => (
        <div
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            display: "inline-block",
            maxWidth: "100px",
          }}
        >
          {text}
        </div>
      ),
      onCell: () => ({ style: { width: "100px" } }),
    },
    {
      title: "Duration",
      dataIndex: "duration",
      fixed: "left",
      onCell: () => ({
        style: {
          width: "100px",
          borderRight: "1px solid rgb(0, 0, 0, 0.02)",
        },
      }),
      render: (record) => (
        <>
          <InputNumber
            bordered={false}
            value={processDuration}
            onChange={(value) => {
              value && setProcessDuration(value);
            }}
          />
        </>
      ),
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      fixed: "left",
      onCell: (record) => ({
        style: {
          width: "100px",
        },
      }),
      render: (element: Moment) => <DatePicker defaultValue={element} />,
    },
    {
      title: <TimelineHeader />,
      dataIndex: "chart",
      onCell: () => ({
        style: {
          padding: "0",
          border: "none",
          margin: "0",
        },
      }),
      render: (element) => (
        <div
          style={{
            width: `${scale * element}px`,
            backgroundColor: "grey",
          }}
        >
          {element}
        </div>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: 1, // the key must be usique to avoid expanding all the row with this key
      name: "name1",
      description: "name1 is a first name very long fucking name hahaha",
      startDate: moment(),
      chart: processDuration,
      children: [
        {
          key: 3,
          name: "name1",
          description: "name1 is a first name very long fucking name hahaha",
          startDate: moment(),
          chart: processDuration,
        },
      ],
    },
    {
      key: 2,
      name: "name2",
      description: "name2 is a second name",
    },
  ];

  return (
    <>
      <Slider
        {...{ max: 50, min: 2 }}
        onChange={scaleHandler}
        value={scale}
        style={{ left: "450px", width: "300px" }}
      />
      <div className={styles["ant-table-wrapper"]}>
        <Table
          pagination={{ position: [] }}
          className={styles["gant-chart-table"]}
          size="small"
          columns={columns}
          dataSource={data}
          scroll={{ x: "max-content" }}
        />
      </div>
    </>
  );
};

export default GantChart;
