import LearnMoreBtn from "./LearnMoreBtn";
type NewsCardProps = {
  image: string;
  title: string;
  description: string;
};

export default function NewsCard({ image, title, description }: NewsCardProps) {
  return (
    <div className="flex flex-col items-center  justify-center max-w-[357px] h-[470px] rounded-2xl overflow-hidden font-inter bg-[#F9F9FF]">
      <img
        src={image}
        alt="campagin-card-img"
        className="w-[315px] h-[201px] rounded-lg mb-3"
      />
      <div className="flex flex-col gap-4 w-[88%] mx-auto  py-4">
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
