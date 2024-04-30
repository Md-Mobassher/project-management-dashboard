import { Button } from "antd";
import { Header } from "antd/es/layout/layout";
import Link from "next/link";

const Navbar = () => {
  return (
    <Header
      style={{
        padding: 0,
        background: "#FFF",
        borderBottom: "1 px solid gray",
      }}
    >
      <div className="flex justify-between items-center h-full w-full">
        <div className="ml-auto lg:px-10 lg:gap-5 gap-2">
          <Button className="bg-white text-black hover:bg-green-600 hover:text-white lg:mr-3">
            <Link className="hover:text-white" href={`/`}>
              Home
            </Link>
          </Button>
          <Button className="bg-white text-black hover:bg-green-600 hover:text-white lg:mr-3">
            <Link className="hover:text-white" href={`/projects`}>
              Projects
            </Link>
          </Button>
          <Button className="bg-white text-black hover:bg-green-600 hover:text-white lg:mr-3">
            <Link className="hover:text-white" href={`/dashboard`}>
              Dashboard
            </Link>
          </Button>

          <Button
            // onClick={() => dispatch(logout())}
            className="bg-white text-black hover:bg-green-600 hover:text-white border lg:mr-3 "
          >
            <Link className="hover:text-white" href={`/login`}>
              Login
            </Link>
          </Button>
          <Button
            // onClick={() => dispatch(logout())}
            className="bg-white text-black hover:bg-green-600 hover:text-white border "
          >
            Logout
          </Button>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
