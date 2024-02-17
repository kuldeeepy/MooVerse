import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../../Endpoints";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let baseUrl = "https://api.themoviedb.org/3";
      const request = await axios.get(
        `${baseUrl}${requests.fetchNetflixOriginals}`
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner text-white object-contain h-[450px]"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents ml-8 pt-36 h-44">
        <h1 className="text-[3rem] font-extrabold pb-[0.3rem]">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_btns">
          <button className="mr-4 btn cursor-pointer outline-none border-none font-bold rounded-[0.2vw] px-8 py-2 bg-[black]">
            Play
          </button>
          <button className="btn cursor-pointer outline-none border-none font-bold rounded-[0.2vw] px-8 py-2 bg-[black]">
            My List
          </button>
        </div>

        <h1 className="desc h-20 w-[45rem] leading-[1.3] pt-4 text-sm max-w-[360px]">
          {movie?.overview}
        </h1>
      </div>
      <div className="black-box"></div>
    </header>
  );
}

export default Banner;
