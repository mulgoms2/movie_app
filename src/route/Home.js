import React, { useEffect } from "react";
import { useState } from "react";
import MovieList from "../components/MovieList";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMoives] = useState([]);

  const getMovies = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)).json();
    setMoives(json.data.movies);
    setLoading(false);
  };

  // const getMovies = async () => {
  //   // const response = await fetch(url);
  //   // const json = await response.json();
  //   setMoives(
  //     (await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)).json()).data.movies
  //   );
  //   setLoading(false);
  // };

  // const getMovies = () => {
  //   return new Promise((resolve, reject) => {
  //     fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
  //       .then((res) => {
  //         if (!res.ok) {
  //           throw new Error(`http error: ${res.status}`);
  //         }
  //         return res.json();
  //       })
  //       .then(resolve)
  //       .catch((err) => reject);
  //   });
  // };

  // useEffect(() => {
  //   getMovies()
  //     .then((data) => setMoives(data.data.movies))
  //     .then(setLoading(false));
  // }, []);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? <h1>Lodaing...</h1> : null}
      {movies.map((info) => (
        <MovieList key={info.id} info={info} />
      ))}
    </div>
  );
}
export default Home;
