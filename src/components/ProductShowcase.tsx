import Image from "next/image";
import AppScreen from "../assets/images/app-screen.png";
const ProductShowcase = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CAB] py-[72px] sm:py-24">
      <div className="container flex flex-col items-center">
        <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter text-center ">
          Intuitive Interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl  mt-5 text-center text-white/70 inline-flex items-center justify-center">
            leverage CI/CD with GitHub Actions, developers can automate testing
            and deployment across staging, development, and production
            environments.
          </p>
        </div>
        <Image src={AppScreen} alt="app-screen" className="mt-14 " />
      </div>
    </div>
  );
};

export default ProductShowcase;
