import React from 'react';
import { useQuery } from '../hooks/useQuery';
import { getUpcomingMovies, getTrendingMovies } from '../services/tmdb';
import MovieRow from '../components/MovieRow';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const NewAndPopular = () => {
  const { 
    data: upcomingMovies, 
    isLoading: upcomingLoading, 
    error: upcomingError 
  } = useQuery(getUpcomingMovies);

  const {
    data: trendingMovies,
    isLoading: trendingLoading,
    error: trendingError
  } = useQuery(getTrendingMovies);

  if (upcomingLoading || trendingLoading) return <LoadingSpinner />;
  if (upcomingError || trendingError) return <ErrorMessage message={upcomingError || trendingError} />;

  return (
    <div className="min-h-screen bg-black">
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <MovieRow title="Upcoming Releases" movies={upcomingMovies} />
        <MovieRow title="Trending Now" movies={trendingMovies} />
      </div>
    </div>
  );
};

export default NewAndPopular;