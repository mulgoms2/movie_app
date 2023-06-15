import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  color: grey;
`;
const Ul = styled.ul`
  list-style-type: none;
`;

function MovieList({ info }) {
  const title = info.title;
  const coverImg = info.medium_cover_image;
  const id = info.id;
  const summary = info.summary;
  const genres = info.genres;

  return (
    <Div>
      <img src={coverImg} alt="movie" />
      <h2>
        <Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>
          {title}
        </Link>
      </h2>
      <p>{summary.length > 250 ? `${summary.slice(0, 250)}` : summary}</p>
      {genres ? (
        <Ul>
          {genres.map((genres) => (
            <li key={genres}>{genres}</li>
          ))}
        </Ul>
      ) : null}
    </Div>
  );
}

MovieList.propTypes = {
  info: PropTypes.object.isRequired,
};
export default MovieList;
