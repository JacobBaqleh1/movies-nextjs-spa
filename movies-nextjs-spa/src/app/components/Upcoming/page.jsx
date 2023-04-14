"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const Upcoming = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=629a273e48cb2530e7dfe69e18a528a4`;

    axios
      .get(API_URL)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-gray-200 flex flex-row flex-wrap relative justify-around  ">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="bg-gray-400 flex flex-col justify-evenly items-center mx-2 my-6  rounded-md shadow-md w-56"
        >
          <h2 className="text-primary text-xl text-raleway font-bold tracking-wider md:text-base">
            {movie.title}
          </h2>
          <div className="bg-white rounded-b-md p-4">
            <Image
              width={170}
              height={300}
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Upcoming;
