import NowPLaying from "./NowPlaying";
import MostPopular from "./MostPopular";
import Upcoming from "./Upcoming";
import TopRated from "./TopRated";

export default function Home() {
  return (
    <div className="">
      <h2 className="text-4xl font-bold text-center my-8   text-primary">
        {" "}
        Movies API with Next.js
      </h2>
      <h3 className=" font-medium text-gray-700 text-center underline text-2xl my-8 ">
        Most Popular
      </h3>
      <MostPopular />

      <h3 className="text-2xl font-medium text-gray-700 text-center underline my-8">
        Now Playing
      </h3>
      <NowPLaying />

      <h3 className="text-2xl font-medium text-gray-700 text-center underline my-8">
        Upcoming
      </h3>
      <Upcoming />
      <h3 className="text-2xl font-medium text-gray-700 text-center underline my-8">
        Top Rated
      </h3>
      <TopRated />
    </div>
  );
}
