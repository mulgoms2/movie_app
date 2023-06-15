import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
function Korea() {
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const key = "d44b7a6f9c42944accac0898e8279740";
    const json = await (
      await fetch(`http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}`)
    ).json();
    console.log(json.movieListResult.movieList);
    setMovie(json.movieListResult.movieList);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <MovieList info={movie} />
    </div>
  );
}

export default Korea;
