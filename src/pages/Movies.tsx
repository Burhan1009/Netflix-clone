import React from 'react';
import { useMovies } from '../hooks/useMovies';
import MovieRow from '../components/MovieRow';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const Movies = () => {
  const { popularMovies, topRatedMovies, isLoading, error } = useMovies();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="min-h-screen bg-black">
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <MovieRow title="Popular Movies" movies={popularMovies} />
        <MovieRow title="Top Rated Movies" movies={topRatedMovies} />
      </div>
    </div>
  );
};

export default Movies;