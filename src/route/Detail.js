import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";

function Detail() {
  const { id } = useParams();
  const [load, setLoad] = useState(true);
  const [movie, setMovie] = useState({});

  const getMovie = useCallback(async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovie(json.data.movie);
    setLoad(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return <div>{load ? "loading..." : <MovieDetails info={movie} />}</div>;
}

export default Detail;
