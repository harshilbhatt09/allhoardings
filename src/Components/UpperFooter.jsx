import React from "react";
import { MdOutlineEmail } from "react-icons/md";

function UpperFooter() {
  return (
    <div className="md:flex justify-between w-3/4 mx-auto border-2 border-black rounded-2xl px-4 md:px-16 py-5 font-[Raleway] my-32 bg-black">
      <div className="my-auto text-white font-bold lg:text-3xl">
        STAY UPTO DATE ABOUT THE <br className="hidden md:block"/> LATEST OFFERS
      </div>
      <div>
        <div className="flex border-2 md:space-x-5 rounded-full md:px-3 py-2 my-2 md:mx-2 md:w-full bg-white">
          <MdOutlineEmail className="mt-0.5 text-xl" />
          <form action="#">
            <input
              type="text"
              placeholder="Enter your email address"
              className="md:w-56 outline-none placeholder:text-sm placeholder:hidden"
            />
          </form>
        </div>
        <div className="md:w-full md:m-2">
            <button className="flex border-2 border-[#E35086] md:space-x-5 rounded-full justify-center py-2 w-full bg-[#E35086] font-bold text-white text-base">
              Subscribe
            </button>
        </div>
      </div>
    </div>
  );
}

export default UpperFooter;
