"use client";
import Image from "next/image";
import acmeImage from "../assets/images/acme.png";
import apexImage from "../assets/images/apex.png";
import celestialImage from "../assets/images/celestial.png";
import echoImage from "../assets/images/echo.png";
import pulseImage from "../assets/images/pulse.png";
import quantumImage from "../assets/images/quantum.png";
import { motion } from "framer-motion";

const images = [
  { src: acmeImage, alt: "acmeImage" },
  { src: apexImage, alt: "apexImage" },
  { src: celestialImage, alt: "celestialImage" },
  { src: echoImage, alt: "echoImage" },
  { src: pulseImage, alt: "pulseImage" },
  { src: quantumImage, alt: "quantumImage" },
];

const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">
          Trusted by the World's most innovative teams
        </h2>
        <div className="flex overflow-hidden relative mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5    before:left-0 after:right-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))] before:z-10">
          <motion.div
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            className="flex gap-16 flex-none pr-16"
          >
            {images.map(({ src, alt }) => (
              <Image
                src={src}
                alt={alt}
                className="flex-none h-8 w-auto "
                key={alt}
              />
            ))}
            {images.map(({ src, alt }) => (
              <Image
                src={src}
                alt={alt}
                className="flex-none h-8 w-auto "
                key={alt}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
