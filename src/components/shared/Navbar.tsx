import Link from "next/link";
import NavItems from "./NavItem";
import { Header } from "antd/es/layout/layout";

const Navbar = () => {
  return (
    <>
      {/* header */}
      <Header
        className=" sticky top-0 z-50 bg-white border-b "
        style={{
          padding: 0,
        }}
      >
        <div className="flex justify-between items-center  lg:gap-5 gap-2 max-w-7xl mx-auto px-4">
          <div className=" lg:text-3xl md:text-2xl text-2xl font-semibold">
            <Link href="/">Project Management</Link>
          </div>

          <NavItems />
        </div>
      </Header>
    </>
  );
};

export default Navbar;
