import React from 'react';
import { useQuery } from '../hooks/useQuery';
import { getPopularTVShows } from '../services/tmdb';
import MovieRow from '../components/MovieRow';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const TVShows = () => {
  const { data: tvShows, isLoading, error } = useQuery(getPopularTVShows);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="min-h-screen bg-black">
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <MovieRow title="Popular TV Shows" movies={tvShows} />
      </div>
    </div>
  );
};

export default TVShows;