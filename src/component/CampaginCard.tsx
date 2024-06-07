import LearnMoreBtn from "./LearnMoreBtn";
type CampaginCardProps = {
  image: string;
  title: string;
  description: string;
};

export default function CampaginCard({
  image,
  title,
  description,
}: CampaginCardProps) {
  return (
    <div className="flex flex-col max-w-[352px] rounded-2xl overflow-hidden font-inter bg-white">
      <img
        src={image}
        alt="campagin-card-img"
        className="w-full h-[352px]"
      />
      <div className="flex flex-col gap-4 w-[88%] mx-auto  py-4">
        <div className="flex flex-col ">
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="font-mono text-base text-gray-500">{description}</p>
        </div>
        <LearnMoreBtn />
      </div>
    </div>
  );
}
