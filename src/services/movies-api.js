import axios from 'axios';
const API_KEY = '5436fbaf6b3dd7d125e5fbc4adba788b';
const BASE_URL = 'https://api.themoviedb.org/3';

async function getTrendMovies() {
  const data = await axios.get(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  );
  return data;
}

async function getMovieById(id) {
  const data = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos&language=en-US`
  );
  return data;
}

const api = {
  getTrendMovies,
  getMovieById,
};

export default api;
