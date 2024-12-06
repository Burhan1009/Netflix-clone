import { useState, useEffect } from 'react';
import { Movie } from '../types/movie';
import { getPopularMovies, getTrendingMovies, getTopRatedMovies } from '../services/tmdb';

export const useMovies = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const [popular, trending, topRated] = await Promise.all([
          getPopularMovies(),
          getTrendingMovies(),
          getTopRatedMovies()
        ]);
        
        setPopularMovies(popular);
        setTrendingMovies(trending);
        setTopRatedMovies(topRated);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An error occurred while fetching movies');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return {
    popularMovies,
    trendingMovies,
    topRatedMovies,
    isLoading,
    error
  };
};