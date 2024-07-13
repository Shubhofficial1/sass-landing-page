import helixImage from "../assets/images/helix2.png";
import emojiStarImage from "../assets/images/emojistar.png";
import Image from "next/image";

const CallToAction = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center">
      <div className="container max-w-xl relative ">
        <Image
          src={helixImage}
          alt="helixImage"
          className="hidden lg:flex lg:absolute top-6 left-[calc(100%-16px)]"
        />
        <Image
          src={emojiStarImage}
          alt="emojiStarImage"
          className="hidden lg:flex lg:absolute -top-[120px] right-[calc(100%-24px)] "
        />
        <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter ">
          Get Instant Access
        </h2>
        <p className="text-xl text-white/70 mt-5">
          Celebrate the joy of accompolishment with an app designed to track
          your progress & motivate your efforts.
        </p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row ">
          <input
            type="email"
            placeholder="your@email.com"
            className=" flex-1 h-12 bg-white/20 rounded-lg p-5 font-medium placeholder:text-[#9CA3AF]"
          />
          <button
            type="submit"
            className="bg-white text-black h-12 rounded-lg px-5 font-bold"
          >
            Get Access
          </button>
        </form>
      </div>
    </div>
  );
};

export default CallToAction;
