import { Layout, Menu } from "antd";
import React from "react";
const { Sider } = Layout;

const items = [Home, Projects, Login].map((icon, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));

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
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
