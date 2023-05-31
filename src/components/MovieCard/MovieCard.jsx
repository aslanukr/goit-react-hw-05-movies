const MovieCard = ({
  id,
  info: { title, poster_path, release_date, vote_average, overview, genres },
}) => {
  return (
    <div key={id}>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300/${poster_path}`
            : 'https://placehold.co/300x450'
        }
        alt={title}
      />
      <h1>
        {title} ({release_date && `${release_date.slice(0, 4)}`})
      </h1>
      <p>User score: {Math.round(vote_average * 10)}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      {genres?.length > 0 ? (
        <p>
          {genres.map(({ id, name }) => (
            <span key={id}> {name} </span>
          ))}
        </p>
      ) : (
        <p>No info</p>
      )}
    </div>
  );
};

export default MovieCard;
