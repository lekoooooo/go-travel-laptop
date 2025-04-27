import React from "react";

const App = () => {
  return (
    <div className="flex flex-col w-full gap-[48px] max-w-[385px] text-center">
      <div>
        {" "}
        <h2 className="text-[32px] font-semibold m-auto max-w-[270px]">
          Travel to make sweet memories
        </h2>
        <p className="font-light text-gray-900">
          Find trips that fit your schedule
        </p>
        <img
          src="./swimming.png"
          className="pt-[48px] m-auto"
          alt="good times"
        />
      </div>
      <div className="flex flex-col items-start pl-[20px]">
        <div className=" pt-[64px]  ">
          <img src="./1.svg" className="pb-[18px] w-[43px]" alt="numero uno" />
          <h2 className="text-[24px] font-semibold max-w-[230px] text-start mb-[18px]">
            Reignite those travel tastebuds
          </h2>
          <p className="text-[14px] font-light text-gray-900 text-start max-w-[280px]">
            Embark on a gastronomic adventure that transports you to distant
            lands, where every dish tells a story.
          </p>
        </div>
        <div className=" pt-[64px] ">
          <img src="./2.svg" className="pb-[18px] w-[43px]" alt="numero uno" />
          <h2 className="text-[24px] font-semibold mb-[18px] max-w-[230px] text-start">
            Get back to nature by travel
          </h2>
          <p className="text-[14px] font-light text-gray-900 text-start max-w-[270px]">
            Escape the hustle and bustle of daily life and reconnect with the
            serene beauty of the natural.
          </p>
        </div>
        <div className="pt-[64px]">
          <img src="./3.svg" className="pb-[18px] w-[43px]" alt="numero uno" />
          <h2 className="text-[24px] font-semibold  mb-[18px] max-w-[230px] text-start">
            Find trips that fit your freedom
          </h2>
          <p className="text-[14px] font-light text-gray-900 text-start max-w-[280px]">
            Embark on a gastronomic adventure that transports you to distant
            lands, where every dish tells a story.
          </p>
        </div>
      </div>
      <button
        className=" w-[230px]
        bg-[#18ABC6]
        hover:bg-amber-600
        cursor-pointer
       py-2 
       m-auto
      
      text-white
      text-center
      rounded-[8px]"
      >
        Start your explore
      </button>
    </div>
  );
};

export default App;
