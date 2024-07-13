import Image from "next/image";
import ArrowWIcon from "../assets/icons/arrow-w.svg";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";

const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute left-1/2 bottom-24 top-[calc(100%-96px)] sm:top-[calc(100%-120px)] -translate-x-1/2 h-[375px] w-[750px] rounded-[100%] bg-black border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px]"></div>

      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#CCF0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <ArrowWIcon />
            </span>
          </a>
        </div>

        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-8xl font-bold tracking-tighter text-center  inline-flex ">
              One Task <br /> at a time
            </h1>
            <Image
              src={cursorImage}
              alt="cursorImage"
              height={200}
              width={200}
              className="absolute right-[476px] top-[108px] hidden sm:inline"
            />
            <Image
              src={messageImage}
              alt="messageImage"
              height={200}
              width={200}
              className="absolute top-[56px] left-[498px] hidden sm:inline"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-lg ">
            By leveraging CI/CD with GitHub Actions, developers can automate
            testing and deployment across staging, development, and production
            environments.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
