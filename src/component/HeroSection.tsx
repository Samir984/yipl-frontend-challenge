import heroBgImg from "../assets/hero.jpeg";

export default function HeroSection() {
  return (
    <div
      className={"w-full h-[728px] relative opacity-90 bg-top bg-no-repeat bg-cover" }
      style={{ backgroundImage: `url(${heroBgImg})`  }}
    >
      <div className="absolute w-full h-full"></div>

    
    </div>
  );
}
