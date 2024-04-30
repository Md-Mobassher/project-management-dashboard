import Sidebar from "@/components/lib/SideBar";
import Navbar from "@/components/shared/Navbar";
import { Layout } from "antd";
const { Content } = Layout;

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "white" }}>
      <Sidebar />
      <Layout>
        <Navbar />
        <Content className="border border-1 bg-sky-50 border-slate-200">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
