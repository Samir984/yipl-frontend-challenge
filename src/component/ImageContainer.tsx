type ImageContainerType = {
  image: string;
  name: string;
  className?: string;
};
export default function ImageContainer({
  image,
  name,
  className,
}: ImageContainerType) {
  return (
    <div
      className={`flex flex-col   justify-between max-w-[328px] max-h-[471px] ${
        className && className
      }`}
    >
      <div className="w-full  max-h-[415px] overflow-hidden">
        <img
          src={image}
          alt="image"
          className="hover:scale-[1.1] transition-all duration-300"
        />
      </div>
      <h4 className="font-inter font-semibold ">{name}</h4>
    </div>
  );
}
