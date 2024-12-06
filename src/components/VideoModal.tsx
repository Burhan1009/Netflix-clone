import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { getMovieVideos } from '../services/tmdb';
import { getAlternativeVideoSources } from '../services/videoSources';
import { Video, VideoSource } from '../types/movie';
import VideoPlayer from './VideoPlayer';

interface VideoModalProps {
  movieId: number;
  movieTitle: string;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ movieId, movieTitle, onClose }) => {
  const [videoSources, setVideoSources] = useState<VideoSource[]>([]);
  const [selectedSource, setSelectedSource] = useState<VideoSource | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        // Fetch YouTube trailers from TMDB
        const videos = await getMovieVideos(movieId);
        const youtubeVideos: VideoSource[] = videos
          .filter(v => v.site.toLowerCase() === 'youtube')
          .map(v => ({
            type: 'youtube',
            url: v.key,
            title: v.name
          }));

        // Fetch alternative sources
        const alternativeSources = await getAlternativeVideoSources(movieTitle);
        
        const allSources = [...youtubeVideos, ...alternativeSources];
        setVideoSources(allSources);
        setSelectedSource(allSources[0] || null);
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [movieId, movieTitle]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (!selectedSource) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
      <div className="relative w-full max-w-4xl mx-4">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300"
        >
          <X className="h-6 w-6" />
        </button>
        
        <VideoPlayer source={selectedSource} />
        
        {videoSources.length > 1 && (
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
            {videoSources.map((source, index) => (
              <button
                key={index}
                onClick={() => setSelectedSource(source)}
                className={`px-4 py-2 rounded ${
                  selectedSource === source
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {source.title}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoModal;