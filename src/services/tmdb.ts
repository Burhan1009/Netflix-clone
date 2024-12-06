import axios from 'axios';
import { Movie, TMDBResponse, VideoResponse } from '../types/movie';

const TMDB_API_KEY = 'eb93639e9cde82464dfd4337de132743';
const BASE_URL = 'https://api.themoviedb.org/3';

export const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: TMDB_API_KEY
  }
});

export const getPopularMovies = async (): Promise<Movie[]> => {
  try {
    const response = await tmdbApi.get<TMDBResponse>('/movie/popular');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw new Error('Failed to fetch popular movies');
  }
};

export const getTrendingMovies = async (): Promise<Movie[]> => {
  try {
    const response = await tmdbApi.get<TMDBResponse>('/trending/movie/week');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw new Error('Failed to fetch trending movies');
  }
};

export const getTopRatedMovies = async (): Promise<Movie[]> => {
  try {
    const response = await tmdbApi.get<TMDBResponse>('/movie/top_rated');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching top rated movies:', error);
    throw new Error('Failed to fetch top rated movies');
  }
};

export const getPopularTVShows = async (): Promise<Movie[]> => {
  try {
    const response = await tmdbApi.get<TMDBResponse>('/tv/popular');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular TV shows:', error);
    throw new Error('Failed to fetch popular TV shows');
  }
};

export const getMovieVideos = async (movieId: number) => {
  try {
    const response = await tmdbApi.get<VideoResponse>(`/movie/${movieId}/videos`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movie videos:', error);
    throw new Error('Failed to fetch movie videos');
  }
};

export const getUpcomingMovies = async (): Promise<Movie[]> => {
  try {
    const response = await tmdbApi.get<TMDBResponse>('/movie/upcoming');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    throw new Error('Failed to fetch upcoming movies');
  }
};