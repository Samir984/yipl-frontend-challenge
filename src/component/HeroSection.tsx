import heroBgImg from "../assets/hero.jpeg";
import Header from "./Header";

export default function HeroSection() {
  return (
    <div
      className={
        "w-full h-[728px] relative opacity-90    bg-cover bg-no-repeat "
      }
      style={{
        backgroundImage: `url(${heroBgImg})`,
      }}
    >
      <div
        className="absolute top-0 w-full h-full bg-gradient-to-b from-blue-900 to-blue-800
] opacity-70 -z-10"
      ></div>
      <Header />
    </div>
  );
}
