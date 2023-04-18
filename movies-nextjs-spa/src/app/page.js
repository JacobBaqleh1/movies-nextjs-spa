import MyCarousel from "./HomePage/Carousel/page";

export default function Home() {
  return (
    <div className="">
      <main>
        <div className="flex flex-col md:flex-row">
          {/*Most Popular */}
          <div className="w-full md:w-1/2   my-8">
            <h3 className="text-2xl font-medium text-gray-700 text-center underline">
              Most Popular
            </h3>
            {/*Carousel */}
            <div className="text-center">
              <MyCarousel />
            </div>
          </div>
          {/*Most Popular */}
          <div className="w-full md:w-1/2   my-8">
            <h3 className="text-2xl font-medium text-gray-700 text-center underline">
              {" "}
              Now Playing
            </h3>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          {/*Most Popular */}
          <div className="w-full md:w-1/2   my-8">
            <h3 className="text-2xl font-medium text-gray-700 text-center underline">
              Top Rated
            </h3>
          </div>
          {/*Most Popular */}
          <div className="w-full md:w-1/2  my-8">
            <h3 className="text-2xl font-medium text-gray-700 text-center underline">
              Upcoming
            </h3>
          </div>
        </div>
      </main>
    </div>
  );
}
