import React, { Component } from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";


class Card extends Component {
  constructor() {
    super();
    this.state = {
      imagesrc:
        "https://www.heartandmind.us/wp-content/uploads/2022/11/arno-senoner-Ie8k7RgNYmU-unsplash-738x1024.jpg",
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
