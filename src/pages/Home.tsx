import React from 'react';
import MovieRow from '../components/MovieRow';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { useMovies } from '../hooks/useMovies';

const Home = () => {
  const { popularMovies, trendingMovies, topRatedMovies, isLoading, error } = useMovies();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="min-h-screen bg-black">
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <MovieRow title="Popular on Netflix" movies={popularMovies} />
        <MovieRow title="Trending Now" movies={trendingMovies} />
        <MovieRow title="Top Rated" movies={topRatedMovies} />
      </div>
    </div>
  );
};

export default Home;