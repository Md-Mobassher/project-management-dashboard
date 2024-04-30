import { Header } from "antd/es/layout/layout";
import Link from "next/link";

const Navbar = () => {
  return (
    <Header
      style={{
        padding: 0,
        height: "80px",
        background: "#FFF",
        borderBottom: "1 px solid gray",
      }}
    >
      <div className="flex justify-end items-center ">
        <div>
          <Link
            className="px-8 py-3 rounded-lg font-semibold bg-white text-black hover:bg-blue-500 hover:text-white"
            href={`/`}
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            className="px-8 py-3 rounded-lg font-semibold bg-white text-black hover:bg-blue-500 hover:text-white "
            href={`/projects`}
          >
            Projects
          </Link>
        </div>
        <div>
          <Link
            className="px-8 py-3 rounded-lg font-semibold bg-white text-black hover:bg-blue-500 hover:text-white "
            href={`/dashboard`}
          >
            Dashboard
          </Link>
        </div>
        <div>
          <Link
            className="px-8 py-3 border rounded-lg font-semibold bg-white text-black hover:bg-blue-500 hover:text-white "
            href={`/login`}
          >
            Login
          </Link>
        </div>
        {/* <div>
          <h4 className="px-8 py-3 border rounded-lg font-semibold bg-white text-black hover:bg-blue-500 hover:text-white ">
            Logout
          </h4>
        </div> */}
      </div>
    </Header>
  );
};

export default Navbar;
