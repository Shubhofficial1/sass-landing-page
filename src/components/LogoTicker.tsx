"use client";
import Image from "next/image";
import acmeImage from "../assets/images/acme.png";
import apexImage from "../assets/images/apex.png";
import celestialImage from "../assets/images/celestial.png";
import echoImage from "../assets/images/echo.png";
import pulseImage from "../assets/images/pulse.png";
import quantumImage from "../assets/images/quantum.png";

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
        <div className="overflow-hidden relative mt-9 before:content-[''] after:content-[''] before:absolute after:absolute  before:h-full after:h-full before:w-5 after:w-5    before:left-0 after:right-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]">
          <div className="flex justify-center gap-16">
            {images.map(({ src, alt }) => (
              <Image
                src={src}
                alt={alt}
                className="flex-none h-8 w-auto"
                key={alt}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
