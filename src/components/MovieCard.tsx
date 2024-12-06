import React, { useState } from 'react';
import { Play, Info } from 'lucide-react';
import { Movie } from '../types/movie';
import VideoModal from './VideoModal';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="relative group">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title || movie.name}
          className="rounded-md transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white font-semibold">{movie.title || movie.name}</h3>
          <div className="flex items-center justify-between mt-2">
            <span className="text-green-400">{movie.vote_average.toFixed(1)}</span>
            <div className="flex space-x-2">
              <button
                onClick={() => setShowModal(true)}
                className="bg-white text-black p-2 rounded-full hover:bg-gray-200"
              >
                <Play className="h-4 w-4" />
              </button>
              <button className="bg-gray-600 text-white p-2 rounded-full hover:bg-gray-700">
                <Info className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <VideoModal 
          movieId={movie.id} 
          movieTitle={movie.title || movie.name || ''}
          onClose={() => setShowModal(false)} 
        />
      )}
    </>
  );
};

export default MovieCard;