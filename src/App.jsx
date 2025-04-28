const App = () => {
  return (
    <div className="flex flex-col w-full max-w-[1440px] mx-auto px-4 lg:px-8 gap-8">
      <div className="flex flex-col m-auto  text-center lg:text-left lg:items-start">
        <h2 className="text-[32px] font-semibold max-w-[490px]">
          Travel to make sweet memories
        </h2>
        <p className="font-light text-gray-900 m-auto mt-4">
          Find the perfect vacation getaway
        </p>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
        <div className="flex-1 flex flex-col items-start">
          <div className="flex flex-col gap-8 mt-4 ">
            <div className="flex items-start gap-4">
              <div className="w-[54px] h-[36px] bg-[#18ABC6] text-white flex items-center justify-center rounded-xl font-semibold">
                1
              </div>
              <div>
                <h3 className="text-[20px] font-semibold">
                  Reignite those travel tastebuds
                </h3>
                <p className="text-[14px] font-light text-gray-900 mt-2 max-w-[340px]">
                  Embark on a gastronomic adventure that transports you to
                  distant lands, where every dish tells a story.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-[54px] h-[36px] bg-[#18ABC6] text-white flex items-center justify-center rounded-xl font-semibold">
                2
              </div>
              <div>
                <h3 className="text-[20px] font-semibold">
                  Get back to nature by travel
                </h3>
                <p className="text-[14px] font-light text-gray-900 mt-2 max-w-[340px]">
                  Escape the hustle and bustle of daily life and reconnect with
                  the serene beauty of the natural.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-[54px] h-[36px] bg-[#18ABC6] text-white flex items-center justify-center rounded-xl font-semibold">
                3
              </div>
              <div>
                <h3 className="text-[20px] font-semibold">
                  Find trips that fit your freedom
                </h3>
                <p className="text-[14px] font-light text-gray-900 mt-2 max-w-[340px]">
                  Embark on a gastronomic adventure that transports you to
                  distant lands, where every dish tells a story.
                </p>
              </div>
            </div>
          </div>

          <button className="mt-12 bg-[#18ABC6] hover:bg-amber-600 text-white py-2 px-6 rounded-[8px] max-w-[200px]">
            Start your explore
          </button>
        </div>

        <div className="flex-1 flex justify-center relative">
          <img
            src="./swimming.png"
            className="rounded-[20px] lg:max-w-[500px] lg:h-[613px] w-full object-cover"
            alt="swimming"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
