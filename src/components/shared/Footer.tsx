import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" py-2  border-t  overflow-hidden bg-slate-100">
      <div className="max-w-7xl mx-auto p-5 flex justify-between items-center">
        <div className="">
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved to NGIT
            Research Foundation
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="footer-title text-center">Social</span>
          <div className="flex gap-1 ">
            <div className="divider divider-horizontal  m-0 p-0 w-0"></div>

            <div className="w-12 h-12 flex justify-center items-center hover:bg-primary rounded-lg">
              <Link href="/">
                <FaFacebookF className="w-6 h-6" />
              </Link>
            </div>

            <div className="divider divider-horizontal  m-0 p-0 w-0"></div>

            <div className="w-12 h-12 flex justify-center items-center hover:bg-primary rounded-lg">
              <Link href="/">
                <FaLinkedinIn className="w-6 h-6" />
              </Link>
            </div>

            <div className="divider divider-horizontal  m-0 p-0 w-0"></div>

            <div className="w-12 h-12 flex justify-center items-center hover:bg-primary rounded-lg">
              <Link href="/">
                <AiOutlineYoutube className="w-6 h-6" />
              </Link>
            </div>

            <div className="divider m-0 p-0 w-0 divider-horizontal"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
