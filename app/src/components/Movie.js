import PropTypes from 'prop-types';

function Movie({coverImg, title, summary, genres}) {
    return <div>
    <img src={coverImg} alt={`${title}poster`}/>
    <h1>{title}</h1>
    <p>{summary}</p>
    <ul>
      {genres.map(genre => <li key={genre}>{genre}</li>)}
    </ul>
  </div>
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;