import LearnMoreBtn from "./LearnMoreBtn";

type ResourceCardProps = {
  icon: string;
  iconName: string;
  title: string;
  description: string;
  className: string;
};

export default function ResourceCard({
  icon,
  title,
  description,
  iconName,
  className,
}: ResourceCardProps) {
  return (
    <div className="flex flex-col  justify-center px-8 py-3 max-w-[353px] h-[338px] bg-white font-inter">
      <div className="flex flex-start items-center gap-4">
        <div
          className={`${className}  flex justify-center items-center h-[65px] w-[65px] rounded-xl`}
        >
          <img src={icon} alt="cions" className="w-7 h-7" />
        </div>
        <span className="text-lg text-[#66686D] ">{iconName}</span>
      </div>
      <div className="flex flex-col gap-4 w-[88%]   py-4">
        <div className="flex flex-col ">
          <h3 className="text-xl font-semibold mb-3 line-clamp-2">{title}</h3>
          <p className="font-mono text-base text-gray-500 line-clamp-3">
            {description}
          </p>
        </div>
        <LearnMoreBtn />
      </div>
    </div>
  );
}
