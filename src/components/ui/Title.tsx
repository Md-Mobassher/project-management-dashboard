type titleProps = {
  firstTitle: string;
  lastTitle?: string;
};
const Title = ({ firstTitle, lastTitle }: titleProps) => {
  return (
    <h2 className="lg:text-4xl md:text-3xl text-2xl  font-semibold text-center text-black">
      {firstTitle} <span className="text-blue-500">{lastTitle}</span>
    </h2>
  );
};

export default Title;
