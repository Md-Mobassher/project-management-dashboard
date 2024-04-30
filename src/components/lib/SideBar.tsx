import { Layout, Menu } from "antd";
import React from "react";
import Navbar from "../shared/Navbar";
const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        background: "#FFF",
        position: "sticky",
        top: 0,
        left: 0,
      }}
    >
      <div className="bg-white flex justify-center items-center py-4 mt-1 border-b-2 border-b-slate-200">
        <h1 className="text-xl font-bold">Project Management Dashboard</h1>
      </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={<Navbar />}
      />
    </Sider>
  );
};

export default Sidebar;
