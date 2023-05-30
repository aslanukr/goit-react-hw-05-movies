import axios from 'axios';

// const API_KEY = '8efa744d01468dd41fac44eaa859e834';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWZhNzQ0ZDAxNDY4ZGQ0MWZhYzQ0ZWFhODU5ZTgzNCIsInN1YiI6IjY0NzBkZWQyMzM2ZTAxMDBhYWUwZDAwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kj3f9MgwcJwqZWcXrgfWqjiiEMuo7IcJ2XaoXJsAKQw',
  },
};

export const getTrending = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/all/day?language=en-US',
    options
  );
  return response.data.results;
};

export const getMovieById = async movie_id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`,
    options
  );
  return response.data;
};

export const getCast = async movie_id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?language=en-US`,
    options
  );
  return response.data.cast;
};

export const getReviews = async movie_id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/reviews?language=en-US&page=1`,
    options
  );
  return response.data.results;
};
