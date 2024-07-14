import React from "react";
import Card from "./Card";

function Main() {
  let card = 3;
  let cardList = [];
  for (let i = 1; i <= card; i++) {
    cardList.push(
      <div key={i}>
        <Card />
      </div>
    );
  }
  return (
    <div className="font-[Raleway] py-7">
      <div className="flex justify-center font-black text-xl md:text-3xl">
        Featured hoardings
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 md:py-9">
        {cardList}
      </div>
      <div className="flex justify-center py-3">
        <button className="border-2 px-3 border-black rounded-full text-xs md:text-base font-bold bg-[#F8FBFA]">
          View all
        </button>
      </div>
    </div>
  );
}

export default Main;
