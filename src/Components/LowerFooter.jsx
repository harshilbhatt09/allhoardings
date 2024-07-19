import React from "react";
import UpperFooter from "./UpperFooter";
import {
  FaInstagram,
  FaSquareXTwitter,
  FaGithub,
  FaFacebook,
} from "react-icons/fa6";

function LowerFooter() {
  return (
    <div class="absolute h-auto w-full bg-[#F0F0F0] font-[Raleway]">
      <div className="hidden md:block md:absolute md:w-full md:inset-x-auto md:-top-1/2">
        <UpperFooter />
      </div>
      <div className="grid md:flex md:justify-around md:mt-36 justify-center">
        <div className="flex-col space-y-7 list-none py-3 md:py-0">
          <div className="text-4xl font-bold">allhoardings</div>
          <div className="text-base">
            We make outdoor advertising <br />
            accessible and seamless.
          </div>
          <div className="flex space-x-4 text-2xl">
            <div>
              <FaSquareXTwitter />
            </div>
            <div>
              <FaFacebook />
            </div>
            <div>
              <FaInstagram />
            </div>
            <div>
              <FaGithub />
            </div>
          </div>
        </div>
        <hr className="border-slate-700 opacity-20" />
        <div className="grid py-3 md:py-0 justify-start">
          <div className="text-base font-semibold tracking-widest leading-10">
            COMPANY
          </div>
          <div>
            <p className="text-base leading-9">About</p>
            <p className="text-base leading-9">Feature</p>
            <p className="text-base leading-9">Works</p>
            <p className="text-base leading-9">Career</p>
          </div>
        </div>
        <div className="grid py-3 md:py-0 justify-start">
          <div className="text-base font-semibold tracking-widest leading-10">
            HELP
          </div>
          <div>
            <p className="text-base leading-9">Customer Support</p>
            <p className="text-base leading-9">Delivery Details</p>
            <p className="text-base leading-9">Terms & Conditions</p>
            <p className="text-base leading-9">Privacy Policy</p>
          </div>
        </div>
        <div className="grid py-3 md:py-0 justify-start">
          <div className="text-base font-semibold tracking-widest leading-10">
            FAQ
          </div>
          <div>
            <p className="text-base leading-9">Account</p>
            <p className="text-base leading-9">Manage Deliveries</p>
            <p className="text-base leading-9">Orders</p>
            <p className="text-base leading-9">Payements</p>
          </div>
        </div>
        <div className="grid py-3 md:py-0 justify-start">
          <div className="text-base font-semibold tracking-widest leading-10">
            RESOURCES
          </div>
          <div>
            <p className="text-base leading-9">Free eBooks</p>
            <p className="text-base leading-9">Development Tutorial</p>
            <p className="text-base leading-9">How to - Blog</p>
            <p className="text-base leading-9">Youtube Playlist</p>
          </div>
        </div>
      </div>
      <div className="pt-14">
        <hr className="border-slate-700 opacity-20 w-3/4 mx-auto py-3" />
        <div className="md:flex justify-between px-5 pb-8">
          <div className="flex justify-center text-sm">
            © 2000-2021, All rights reserved
          </div>
          <div className="flex justify-evenly pt-3 md:pt-0 space-x-3 md:space-x-5">
            <div className="h-8 w-12 border px-2 py-1 rounded-md bg-white">
              <img className="mt-1.5" src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" />
            </div>
            <div className="h-8 w-12 border px-2 py-1 rounded-md bg-white">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" />
            </div>
            <div className="h-8 w-12 border px-2 py-1 rounded-md bg-white">
              <img className="mt-2" src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" />
            </div>
            <div className="h-8 w-12 border px-2 py-1 rounded-md bg-white">
              <img className="mt-1.5" src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" />
            </div>
            <div className="h-8 w-12 border px-2 py-1 rounded-md bg-white">
              <img className="mt-1" src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LowerFooter;
