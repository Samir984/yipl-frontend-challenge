import heroBgImg from "../assets/hero.jpeg";
import { Logo } from "./Header";
import twitterLogo from "../assets/Twitter.png";
import linkdinLogo from "../assets/LinkedIn.png";
import youtube from "../assets/YouTube.png";

export default function Footer() {
  return (
    <div
      className="relative py-12  font-inter text-white opacity-90 bg-no-repeat bg-cover bg-center "
      style={{
        backgroundImage: `url(${heroBgImg})`,
      }}
    >
      <div
        className="absolute top-0 w-full h-full bg-gradient-to-b from-hero-bg1 to-hero-bg2
] opacity-80 -z-10"
      ></div>
      <div className="flex flex-wrap laptop:gap-48 gap-10 items-center justify-center    px-6 max-w-[1340px] mx-auto min-h-[214px] ">
        <div className="flex flex-col gap-4 w-[304px]">
          <Logo />
          <p>
            We are a collaboration of non-government organisation and
            professionals working to ensure that government spending.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="flex w-9 h-9 bg-white rounded-full items-center justify-center"
            >
              <img src={twitterLogo} alt="logo" />
            </a>
            <a
              href="#"
              className="flex w-9 h-9 bg-white rounded-full items-center justify-center"
            >
              <img src={linkdinLogo} alt="logo" />
            </a>
            <a
              href="#"
              className="flex w-9 h-9 bg-white rounded-full items-center justify-center"
            >
              <img src={youtube} alt="logo" />
            </a>
          </div>
        </div>
        <div className="flex justify-between w-[470px]">
          <div className=" w-[73px]">
            <h3 className="font-semibold mb-6 ">Links</h3>
            <ul className="flex flex-col gap-3 w-[73px] ">
              <li className="">Campagin</li>
              <li className="">Resources</li>
              <li className="">News</li>
              <li className="">About Us</li>
            </ul>
          </div>

          <div className="">
            <h3 className="font-semibold mb-6 ">Links</h3>
            <ul className="flex flex-col gap-3 ">
              <li className="">Contact Us</li>
              <li className="">Join Us</li>
            </ul>
          </div>

          <div className="">
            <h3 className="font-semibold mb-6 ">Resources</h3>
            <ul className="flex flex-col gap-3 ">
              <li className="">Transparency Toolkit</li>
              <li className="">Evidence</li>
              <li className="">Best Practices</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
