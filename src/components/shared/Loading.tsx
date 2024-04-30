import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-[20%] mx-auto my-10">
      <Image
        src="https://i.stack.imgur.com/hzk6C.gif"
        width={20}
        height={20}
        alt="loading"
        className="w-96 mx-auto"
      />
    </div>
  );
};

export default Loading;
