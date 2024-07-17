import React from "react";
import UpperFooter from "./UpperFooter";

function LowerFooter() {
  return (
    <div class="absolute h-auto w-full bg-[#F0F0F0] font-[Raleway]">
      <div className="hidden md:block md:absolute md:w-full md:inset-x-auto md:-top-1/2">
        <UpperFooter />
      </div>
      <div className="md:flex md:justify-around md:my-36 text-center">
        <div className="list-none py-3 md:py-0">
          <li className="text-lg font-bold">Company</li>
          <li>About</li>
          <li>Features</li>
          <li>Works</li>
          <li>Career</li>
        </div>
        <div className="list-none py-3 md:py-0">
          <li className="text-lg font-bold">Company</li>
          <li>About</li>
          <li>Features</li>
          <li>Works</li>
          <li>Career</li>
        </div>
        <div className="list-none py-3 md:py-0">
          <li className="text-lg font-bold">Company</li>
          <li>About</li>
          <li>Features</li>
          <li>Works</li>
          <li>Career</li>
        </div>
        <div className="list-none py-3 md:py-0">
          <li className="text-lg font-bold">Company</li>
          <li>About</li>
          <li>Features</li>
          <li>Works</li>
          <li>Career</li>
        </div>
      </div>
    </div>
  );
}

export default LowerFooter;
