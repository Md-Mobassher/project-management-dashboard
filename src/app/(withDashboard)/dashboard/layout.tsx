"use client";
import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

const { Content, Sider } = Layout;

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout className="min-h-screen" style={{ backgroundColor: "FFF" }}>
      <Sider breakpoint="lg" collapsedWidth="0" theme="light">
        <div className="demo-logo-vertical" />
        <Menu mode="inline" defaultSelectedKeys={["4"]} items={items} />
      </Sider>
      <Layout>
        <Content style={{ margin: "24px 16px 0" }}>
          <div>{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
