
import Image from "next/image";
import logosaas from "../assets/images/logosaas.png";
import Menu from "../assets/icons/menu.svg";
import Button from "@/utility/button";

export const Navbar = () => {
  return (
    <div className="bg-[#020202] relative">
      <div className="sm:px-10 px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
            <Image
              src={logosaas}
              alt="sass logo"
              className="h-12, w-12 relative"
            />
          </div>
          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex items-center justify-center rounded-lg sm:hidden">
          <Menu className="text-white" />
          </div>
          <nav className="gap-6 items-center hidden sm:flex text-sm ">
            <a
              href="#"
              className="capitalize text-opacity-100 text-white transition-all duration-300 hover:text-opacity-75 text transtion"
            >
              services
            </a>
            <a
              href="#"
              className="capitalize text-opacity-100 text-white transition-all duration-300 hover:text-opacity-75 text transtion"
            >
              product
            </a>
            <a
              href="#"
              className="capitalize text-opacity-100 text-white transition-all duration-300 hover:text-opacity-75 text transtion"
            >
              About
            </a>
            <a
              href="#"
              className="capitalize text-opacity-100 text-white transition-all duration-300 hover:text-opacity-75 text transtion"
            >
              projects
            </a>
            <a
              href="#"
              className="capitalize text-opacity-100 text-white transition-all duration-300 hover:text-opacity-75 text transtion"
            >
              testimonial
            </a>
            <div className="flex items-center gap-x-3">
              <Button />
              <a className="font-normal text-xs md:text-sm leading-5 block select-none cursor-pointer transition-all duration-300 hover:text-opacity-75 text-white">
                Log In
              </a>
            </div>
          </nav>
        </div>
      </div>
      <hr style={{
            height: .5,
            borderColor : '#696969'
        }}/>
    </div>
    
  );
};
