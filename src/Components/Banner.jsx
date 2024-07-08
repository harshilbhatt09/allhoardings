import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaFilter } from "react-icons/fa";

function Banner() {
  return (
    <div className="font-[Raleway]">
      <div className="bg-cover bg-[url('https://s3-alpha-sig.figma.com/img/ef6e/e64d/bb3a069dfe3928150ddca6b522fc838b?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bmmd90ApSB5ueap4Cq1K~mRQ6H8KMJWMqy0E3OxGpeoEHa5dm8qzcGfvD4j-NMVIyFEwxINkvDPvtcVM7dr2xxyocJYU2LkbRDHsJrzFf3ZcQHnTw5P-ddzjfBYOH4xv4udYxd7h0wLen4YFuqKthhnD42Hv5KG5hwgzAKSMR-XQhW~xrFBlQsCMRlFgiO5fdtuRe0SBVh6il~7MyRrMSNXSRK3OUHQY~tQslnGEmA8SkASmuwHVTtwXg2TrH2Rocd1Mi8R1B2EfbvnsZ-5~rJChVDC~cgNMULFyk0vpuoFtNdcJjRfRJF7VkuD~~vF2VW94-fPaQTllrNiMWWao1A__')]">
        <div className="backdrop-brightness-50 py-20 text-white flex justify-center font-black text-lg lg:text-3xl 2xl:text-4xl text-center font-[Raleway] ">
          Find and book out-of-home media <br></br> all over the world in one
          place
        </div>
        <div className="backdrop-brightness-50 pb-20">
          <form
            action="#"
            className="flex w-full justify-around p-2 text-xs lg:w-5/12 md:text-base bg-[#F8FBFA] mx-auto text-center border rounded-full"
          >
            <button>
              <FiSearch className="mx-1" />
            </button>
            <input
              type="text"
              placeholder="Search City, Postcode or State"
              className="outline-none bg-transparent w-4/5 md:pl-4"
            />
            <div className="flex space-x-2">
              <button className="flex xl:border-2 border-black rounded-full space-x-2 xl:px-3 xl:py-1 mt-2 xl:mt-0">
                <div>
                  <FaFilter className="mt-1" />
                </div>
                <div className="hidden text-base font-bold xl:block">
                  Filters
                </div>
              </button>
              <button className="border-2 border-[#E35086] bg-[#E35086] text-base font-bold text-white rounded-full space-x-2 px-4 py-1">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Banner;
