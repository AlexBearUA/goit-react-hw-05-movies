const normalaziedMovies = movies => {
  return movies.map(({ id, title, poster_path }) => ({
    id,
    title,
    poster_path,
  }));
};

const normalaziedMovie = ({
  original_title,
  poster_path,
  genres,
  vote_average,
  overview,
}) => ({ original_title, poster_path, genres, vote_average, overview });

const normalaziedCredits = credits => {
  return credits.map(
    ({ original_name, character, profile_path, credit_id }) => ({
      original_name,
      character,
      profile_path,
      credit_id,
    })
  );
};

const normalaziedReviews = reviews => {
  return reviews.map(({ author, content, id }) => ({
    author,
    content,
    id,
  }));
};

export {
  normalaziedMovies,
  normalaziedMovie,
  normalaziedCredits,
  normalaziedReviews,
};
