"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const TopRated = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const API_KEY = "629a273e48cb2530e7dfe69e18a528a4";
    const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=629a273e48cb2530e7dfe69e18a528a4`;

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
    <div className="bg-gray-400 flex flex-row flex-wrap items-center relative justify-evenly  ">
      {movies.map((movie) => (
        <div key={movie.id} className="flex flex-col items-center mx-2 my-4">
          <h2 className="text-primary text-xl text-raleway font-bold tracking-wider md:text-base">
            {movie.title}
          </h2>
          <Image
            width={220}
            height={300}
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      ))}
    </div>
  );
};

export default TopRated;
