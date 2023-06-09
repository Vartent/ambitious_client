import React from "react";

import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";

import { Props } from "./index.type";
import styles from "./styles.module.scss";

const { Header, Content, Sider } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
  };
});

const LayoutAccount = ({ children }: Props) => {
  return (
    <Layout className={styles["main-layout"]}>
      <Header className="header">
        <Menu
          className={styles["header-menu"]}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
        />
      </Header>
      <Layout>
        <Sider width={200} className={styles["sider-menu"]}>
          <Menu
            style={{ height: "100%" }}
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            items={items2}
          />
        </Sider>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: "white",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutAccount;
