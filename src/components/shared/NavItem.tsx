"use client";
import { useState } from "react";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import useProjectStore from "@/zustand/projectStore";
import { toast } from "react-toastify";

const NavItems = () => {
  const login = useProjectStore((state) => state.login);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    useProjectStore.setState({ login: false });
    toast.success("Successfully logged out.");
  };
  const navItem = (
    <>
      <Link className="rounded-lg" href="/">
        <div className="bg-white px-5 py-3 rounded text-md font-semibold text-black hover:bg-blue-500 hover:text-white inline">
          Home
        </div>
      </Link>
      <Link className="rounded-lg" href="/projects">
        <div className="bg-white px-5 py-3 rounded text-md font-semibold text-black hover:bg-blue-500 hover:text-white inline">
          Projects
        </div>
      </Link>
      <Link className="rounded-lg" href="/dashboard">
        <div className="bg-white px-5 py-3 rounded text-md font-semibold text-black hover:bg-blue-500 hover:text-white inline">
          Dashboard
        </div>
      </Link>

      {login ? (
        <button onClick={() => handleLogout()}>
          <div className="bg-white px-5 py-3 rounded-md text-md font-semibold border   text-black hover:bg-blue-500 hover:text-white border-blue-500 inline cursor-pointer">
            Logout
          </div>
        </button>
      ) : (
        <Link className="rounded-lg" href="/login">
          <div className="bg-white px-5 py-3 rounded-md text-md font-semibold border   text-black hover:bg-blue-500 hover:text-white border-blue-500 inline">
            Login
          </div>
        </Link>
      )}
    </>
  );

  return (
    <>
      <div className="">
        {/*  large device menu */}
        <div className="hidden md:block ">
          <div className="flex justify-end items-center">{navItem}</div>
        </div>

        {/* Mobile Menu Button (visible on small screens) */}
        <div className="-mr-2 flex md:hidden p-2 relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className=" text-slate-700  rounded"
            aria-controls="mobile-menu"
            aria-expanded={isOpen ? "true" : "false"}
          >
            {isOpen ? (
              <div className="p-1 border rounded-md hover:bg-blue-500 hover:text-white">
                <RxCross2 className="size-8" />
              </div>
            ) : (
              <div className="p-1 border rounded-md hover:bg-blue-500 hover:text-white">
                <GiHamburgerMenu className="size-8" />
              </div>
            )}
            {isOpen && (
              <div className="flex flex-col pt-5 w-60 top-16 right-0 shadow-lg rounded-md absolute transition-all duration-500 bg-white">
                {navItem}
              </div>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default NavItems;
