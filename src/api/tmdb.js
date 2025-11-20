import i18n from '../i18n';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

const getLanguage = () => {
  return i18n.language || 'ar';
};

export const tmdbApi = {
  getTrending: async (mediaType = 'all', timeWindow = 'week') => {
    const response = await fetch(
      `${BASE_URL}/trending/${mediaType}/${timeWindow}?api_key=${API_KEY}&language=${getLanguage()}`
    );
    return response.json();
  },

  getPopular: async (mediaType = 'movie') => {
    const response = await fetch(
      `${BASE_URL}/${mediaType}/popular?api_key=${API_KEY}&language=${getLanguage()}`
    );
    return response.json();
  },

  getTopRated: async (mediaType = 'movie') => {
    const response = await fetch(
      `${BASE_URL}/${mediaType}/top_rated?api_key=${API_KEY}&language=${getLanguage()}`
    );
    return response.json();
  },

  getUpcoming: async () => {
    const response = await fetch(
      `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=${getLanguage()}`
    );
    return response.json();
  },

  getNowPlaying: async () => {
    const response = await fetch(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=${getLanguage()}`
    );
    return response.json();
  },

  getDetails: async (mediaType, id) => {
    const response = await fetch(
      `${BASE_URL}/${mediaType}/${id}?api_key=${API_KEY}&language=${getLanguage()}&append_to_response=videos,credits`
    );
    return response.json();
  },

  search: async (query, mediaType = 'multi') => {
    const response = await fetch(
      `${BASE_URL}/search/${mediaType}?api_key=${API_KEY}&language=${getLanguage()}&query=${encodeURIComponent(query)}`
    );
    return response.json();
  },

  getGenres: async (mediaType = 'movie') => {
    const response = await fetch(
      `${BASE_URL}/genre/${mediaType}/list?api_key=${API_KEY}&language=${getLanguage()}`
    );
    return response.json();
  },

  discover: async (mediaType = 'movie', options = {}) => {
    const { genre, year, sortBy } = options;
    let url = `${BASE_URL}/discover/${mediaType}?api_key=${API_KEY}&language=${getLanguage()}`;
    
    if (genre) url += `&with_genres=${genre}`;
    if (year) url += `&year=${year}`;
    if (sortBy) url += `&sort_by=${sortBy}`;
    
    const response = await fetch(url);
    return response.json();
  },

  getImageUrl: (path, size = 'w500') => {
    if (!path) return '/generated-icon.png';
    return `${IMAGE_BASE_URL}/${size}${path}`;
  },

  getVideoUrl: (key) => {
    return `https://www.youtube.com/watch?v=${key}`;
  }
};
