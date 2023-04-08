import { Inter } from "next/font/google";
import NowPLaying from "./NowPlaying";
import MostPopular from "./MostPopular";
import Upcoming from "./Upcoming";
import TopRated from "./TopRated";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <h2 className="text-4xl font-bold text-center my-8 text-primary">
        {" "}
        Movies API with Next.js
      </h2>
      <h3 className="text-lg font-medium text-gray-700 text-center underline">
        Most Popular
      </h3>
      <MostPopular />

      <h3 className="text-lg font-medium text-gray-700 text-center underline">
        Now Playing
      </h3>
      <NowPLaying />

      <h3 className="text-lg font-medium text-gray-700 text-center underline">
        Upcoming
      </h3>
      <Upcoming />
      <h3 className="text-lg font-medium text-gray-700 text-center underline">
        Top Rated
      </h3>
      <TopRated />
    </div>
  );
}
