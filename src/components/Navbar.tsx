import Image from "next/image";
import Logo from "../assets/images/logosaas.png";
import MenuIcon from "../assets/icons/menu.svg";

const Navbar = () => {
  return (
    <div className="py-4 bg-black">
      <div className="px-4 flex items-center justify-between">
        <div className="relative">
          <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF)] blur-md"></div>
          <Image src={Logo} alt="sass-logo" className="w-12 h-12 relative" />
        </div>
        <div className="border border-white border-opacity-30 h-10 w-10 rounded-lg inline-flex items-center justify-center sm:hidden ">
          <MenuIcon className="text-white" />
        </div>
        <nav className="gap-6 hidden sm:flex items-center">
          <a
            href="#"
            className="text-opacity-60 hover:text-opacity-100 text-white"
          >
            About
          </a>
          <a
            href="#"
            className="text-opacity-60 text-white hover:text-opacity-100"
          >
            Features
          </a>
          <a
            href="#"
            className="text-opacity-60 text-white hover:text-opacity-100"
          >
            Updates
          </a>
          <a
            href="#"
            className="text-opacity-60 text-white hover:text-opacity-100"
          >
            Help
          </a>
          <a
            href="#"
            className="text-opacity-60 text-white hover:text-opacity-100"
          >
            Customers
          </a>
          <button className="bg-white py-2 px-4 rounded-lg">
            Get for free
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
