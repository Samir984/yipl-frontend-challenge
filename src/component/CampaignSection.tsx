import SecondaryHeading from "./SecondaryHeading";
import CampaginCard from "./CampaginCard";
import campaignImg1 from "../assets/campaign-img(1).png";
import campaignImg2 from "../assets/campaign-img(2).png";
import campaignImg3 from "../assets/campaign-img(3).png";

export default function CampaignSection() {
  return (
    <div className="min-h-[956px] p-12 bg-[#F9F9FF]">
      <SecondaryHeading
        secondaryHeading="Campaigns"
        text="We aim to stop public funds siphoning off and we have a plan that will help. We are working at the national and EU levels to advance."
      />
      <div className="flex justify-center gap-12   flex-wrap max-w-6xl min-h-[597px] mx-auto mt-8">
        <CampaginCard
          image={campaignImg1}
          title="Open Data Directive"
          description="In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds In view of Russia’s military action against the Ukrainian people, "
        />
        <CampaginCard
          image={campaignImg2}
          title="Beneficial Ownership"
          description="In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds In view of Russia’s military action against the Ukrainian people, "
        />
        <CampaginCard
          image={campaignImg3}
          title="EU Recovery Transparency"
          description="In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds In view of Russia’s military action against the Ukrainian people, "
        />
      </div>
    </div>
  );
}
