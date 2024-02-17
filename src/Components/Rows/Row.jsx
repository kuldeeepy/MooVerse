import { useEffect, useState } from "react";
import axios from "axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

let posterUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      let baseUrl = "https://api.themoviedb.org/3";
      const request = await axios.get(baseUrl + fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  let opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie.name || movie.title)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(`The erros is`, error));
    }
  };

  return (
    <div className="row text-white w-full p-3 pr-0">
      <h2 className="p-2 font-semibold">{title}</h2>

      <div className="row_posters p-5 flex overflow-y-hidden overflow-x-scroll">
        {movies.map((movie) => (
          <img
            className={`${
              isLargeRow ? "max-h-60 hover:scale-[1.10]" : ""
            } transition-transform duration-500 ease-in-out hover:scale-[1.08] w-full mr-3 object-contain max-h-28`}
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={`${posterUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
