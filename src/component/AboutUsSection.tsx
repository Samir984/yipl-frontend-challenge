import LearnMoreBtn from "./LearnMoreBtn";
import person1 from "../assets/Image (1).png";
import person2 from "../assets/Image (2).png";
import person3 from "../assets/Image (3).png";
import person4 from "../assets/Image (4).png";
import ImageContainer from "./ImageContainer";

export default function AboutUsSection() {
  return (
    <div className=" w-full min-h-[1314px] py-12 ">
      <div className="flex  justify-center flex-wrap gap-12 tablet:max-w-[1110px] w-[96%] phone:w-[90%]  mx-auto">
        <div className="w-[368px] h-[440px]  ">
          <h2 className="text-3xl font-inter font-semibold mb-5">Who we are</h2>
          <p className="font-mono text-xl text-gray-800 mb-8">
            We are a collaboration of Non Govt. and professionals working to
            ensure that government spending is done fairly, openly, efficiently,
            and creates the best value for money and best outcomes for Europe.
            We are working at the national and EU levels to advance the
            principles of openness in spending of funds, procurement, and
            company ownership within the EU.
          </p>
          <LearnMoreBtn label={"See more"} />
        </div>
        <div className="grid grid-cols-2 gap-4  grid-rows-2 laptop:h-[1022px] tablet:h-[900px] ">
          <ImageContainer
            image={person1}
            name="Adriana Homolova"
            className="self-start"
          />
          <ImageContainer
            image={person2}
            name="Sandor Lederer"
            className="self-end"
          />
          <ImageContainer
            image={person3}
            name="Karolis Granickas"
            className="self-start"
          />
          <ImageContainer
            image={person4}
            name="Zara Montgomery"
            className="self-end"
          />
        </div>
      </div>
    </div>
  );
}
