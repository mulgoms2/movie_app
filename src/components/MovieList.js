import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieList({ info }) {
  const title = info.title;
  const coverImg = info.medium_cover_image;
  const id = info.id;
  const summary = info.summary;
  const genres = info.genres;

  return (
    <div>
      <img src={coverImg} alt="movie" />
      <h2>
        <Link to={`/detail/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genres) => (
          <li key={genres}>{genres}</li>
        ))}
      </ul>
    </div>
  );
}
MovieList.propTypes = {
  info: PropTypes.object.isRequired,
};
export default MovieList;
