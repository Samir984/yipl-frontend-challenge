import ResourceCard from "./ResourceCard";
import SecondaryHeading from "./SecondaryHeading";
import vectorIcon from "../assets/Vector.png";
import solidIcon from "../assets/Solid.png";
import outlineIcon from "../assets/Outline.png";

export default function ResourceSection() {
  return (
    <div className="py-20 bg-[#F9F9FF]">
      <div className="max-w-[1110px] mx-auto h-[572px]">
        <SecondaryHeading
          secondaryHeading="Latest Resources"
          text="The latest resources includes Transparency Toolkit, Evidence, Best Practices"
        />
        <div className="mt-6 flex flex-wrap gap-4 justify-center mb-8">
          <ResourceCard
            className="bg-[#F8F1FF]"
            icon={vectorIcon}
            iconName="Tool"
            title="Defence Elvis"
            description="It allows creating networks of public spending on goods services used in defense in 28 EU countries..."
          />
          <ResourceCard
            icon={outlineIcon}
            className="bg-[#F3F6FF]"
            iconName="Tool"
            title="Defence Elvis"
            description="It allows creating networks of public spending on goods services used in defense in 28 EU countries..."
          />
          <ResourceCard
            icon={solidIcon}
            className="bg-[#FAE6E0]"
            iconName="Tool"
            title="Defence Elvis"
            description="It allows creating networks of public spending on goods services used in defense in 28 EU countries..."
          />
        </div>
        <div className="w-full text-center">
          <button className="border-2 border-[#1D6FA3]  px-4 py-[10px] rounded hover:bg-slate-100    ">
            View all resources
          </button>
        </div>
      </div>
    </div>
  );
}
