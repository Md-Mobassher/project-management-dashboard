import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" py-2  border-t  overflow-hidden bg-slate-100">
      <div className="max-w-7xl mx-auto p-5 flex justify-center items-center">
        <p className="text-md">
          Copyright © {new Date().getFullYear()} - All right reserved to{" "}
          <Link
            href="https://dev-mobassher.web.app"
            target="_blank"
            className="text-blue-400"
          >
            Md Mobassher Hossain
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
