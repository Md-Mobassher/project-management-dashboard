import Image from "next/image";
import notfound from "@/assets/images/not-found.jpg";

const NotFoundPage = () => {
  return (
    <div className="w-[40%] mx-auto">
      <Image
        src={notfound}
        width={500}
        height={500}
        alt="not found page"
        className="w-full"
      />
    </div>
  );
};

export default NotFoundPage;
