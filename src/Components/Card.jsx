import React, { Component } from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";


class Card extends Component {
  constructor() {
    super();
    this.state = {
      imagesrc:
        "https://s3-alpha-sig.figma.com/img/0ca4/2fde/bd4e9ccb3d6c0a782276fc4cb82d5c1c?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q1poHDimS08h20c4n5VzZBNhZXSgsP2eSMxhkbq0l~9V0aXGRJ8oHd11RCt3yaZexSoZjDTjntdS036FC14dPPQ5jZhFLbu91ZqUIHd46-MglcYVfYI7F1df5TME3NmhhomF66ezLvuxRtYkyP3frqbz4f6x7PLjIFAUpBU5OSw4jdAs7rQhP3nanLKJjoU3ecffrz~LnU949~TScTJ08hQETixyP3X6xx28syFljRefUjOHUT7wtiUbQ6KvkLYCo72pv1AKXdvk~IlVFVa2duzCcskTYmU98~q~A9U82Ve4fnEnCWnKQ27K1-3XRN8rhYODCntzQsckI3ofeb3fbA__",
      city: "Karelibaug, Vadodara",
      rating: 4.5,
      price: "180",
    };
  }
  render() {
    return (
      <div className="font-[Raleway]">
        <div className="h-auto w-56 md:h-auto md:w-64 lg:h-auto lg:w-72 mx-auto my-4">
          <img
            className="h-56 w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 mx-auto rounded-3xl my-4"
            src={this.state.imagesrc}
          />
          <div className="text-lg font-bold">{this.state.city}</div>
          <div className="flex space-x-2 text-sm">
            <div className="flex">
              <div className="mt-1">
                <FaStar className="text-[#E35086]" />
              </div>
              <div className="mt-1">
                <FaStar className="text-[#E35086]" />
              </div>
              <div className="mt-1">
                <FaStar className="text-[#E35086]" />
              </div>
              <div className="mt-1">
                <FaStar className="text-[#E35086]" />
              </div>
              <div className="mt-1">
                <FaStar className="text-[#E35086]" />
              </div>
              <div className="mt-1">
                <FaRegStarHalfStroke className="text-[#E35086]" />
              </div>
            </div>
            <div>{this.state.rating} / 5</div>
          </div>
          <div className="text-2xl font-bold">${this.state.price}</div>
        </div>
      </div>
    );
  }
}

export default Card;
