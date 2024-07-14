"use client";
import helixImage from "../assets/images/helix2.png";
import emojiStarImage from "../assets/images/emojistar.png";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div
      className="bg-black text-white py-[72px] sm:py-24 text-center"
      ref={containerRef}
    >
      <div className="container max-w-xl relative ">
        <motion.div style={{ translateY }}>
          <Image
            src={helixImage}
            alt="helixImage"
            className="hidden lg:flex lg:absolute top-6 left-[calc(100%-6px)]"
          />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image
            src={emojiStarImage}
            alt="emojiStarImage"
            className="hidden lg:flex lg:absolute -top-[120px] right-[calc(100%-4px)] "
          />
        </motion.div>
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
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
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
