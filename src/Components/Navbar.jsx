import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

function Navbar() {
  return (
    <div className="flex justify-between">
      <div className="font-[Raleway] font-black bg-[#E35086] text-xl text-[#F8FBFA] px-6 py-3">
        allhoardings
      </div>
      <div className="flex justify-around text-xl">
        <div className="px-6 py-3">
          <FiShoppingCart />
        </div>
        <div className="px-6 py-3">
          <FiUser />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
