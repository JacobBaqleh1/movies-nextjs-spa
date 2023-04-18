import Link from "next/link";
import React from "react";

function MainNavigation() {
  return (
    <div className="bg-gray-500">
      {/*Header Title */}
      <h2 className="text-center text-4xl font-bold my-4">
        All Things Movies.com
      </h2>
      {/*Nav Links */}
      <nav className="my-16 pb-4">
        <ul className="flex justify-evenly ">
          <li>
            {" "}
            <Link className="md:text-teal-200" href="/">
              Home{" "}
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/components/MostPopular"> Most Popular</Link>
          </li>
          <li>
            <Link href="/components/NowPlaying"> Now Playing</Link>
          </li>
          <li>
            <Link href="/components/TopRated"> Top Rated</Link>
          </li>{" "}
          <li>
            <Link href="/components/Upcoming">Upcoming</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNavigation;
