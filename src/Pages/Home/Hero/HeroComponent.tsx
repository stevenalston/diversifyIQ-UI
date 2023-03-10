import { TbArrowBadgeRight } from "react-icons/tb";
import image from "../../../assets/images/diversify_header.png";

const steps = [{}];

export const HeroComponent = () => {
  return (
    <header className="md:pt-[5%] lg:pt-[2%] relative min-h-[650px] bg-iqblack-800 bg-gradient-to-t from-iqblack-900 to-iqblack-800">
      <div className="flex items-center">
        <h1 className="flex items-center font-display text-3xl pt-2 pr-3 border-t-[1.5px] border-iqgold-300/75 tracking-[6px] text-iqgold-300 font-bold uppercase ml-6">
          <TbArrowBadgeRight className="inline-block text-2xl" /> Mastery-Based
        </h1>
        <p className="text-iqgold-300 text-3xl pt-[9.5px] font-semibold font-display uppercase tracking-[6px]">
          Learning
        </p>
      </div>
      <p className="ml-6 text-teal-200 text-xl font-display uppercase tracking-tighter">
        -- Empowering diverse minds for a stronger workforce
      </p>
      <p className="ml-6 md:w-1/2 lg:w-1/3 pt-2 text-iqgold-100 leading-relaxed tracking-wide text-xs">
        Our platform offers a unique solution to the problem of culturally
        relevant software development training and breaking down entry barriers
        for people of color in tech. Providing personalized, accessible, and
        affordable training programs, specifically designed for underrepresented
        communities in tech.{" "}
        <span className=" text-sm block mt-3">
          Join our community of inclusive tech learners and level up today!
        </span>
      </p>
      <div className="sm:text-base xl:text-xl mt-5 pl-8 flex ml-8 items-center relative z-10">
        <button className="scale-btn text-iqblack-800 bg-iqteal-400 bg-gradient-to-t hover:bg-gradient-to-b from-iqteal-400 to-teal-200 py-2 px-4 rounded-[2px]">
          Explore More
        </button>
        <button className="scale-btn text-iqteal-400 ml-3 py-2 px-4 rounded-[2px] border-[0.5px] border-iqteal-400">
          Contact Us
        </button>
      </div>
      <img
        className="absolute -bottom-[7px] left-0 max-w-full"
        src={image}
        alt="diverse group of people"
      />
    </header>
  );
};
