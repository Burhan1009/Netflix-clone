import React from 'react';
import { VideoSource } from '../types/movie';

interface VideoPlayerProps {
  source: VideoSource;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ source }) => {
  const getEmbedUrl = (source: VideoSource) => {
    switch (source.type) {
      case 'youtube':
        return `https://www.youtube-nocookie.com/embed/${source.url}?autoplay=1&origin=${window.location.origin}`;
      case 'vimeo':
        return `https://player.vimeo.com/video/${source.url}?autoplay=1`;
      case 'dailymotion':
        return `https://www.dailymotion.com/embed/video/${source.url}?autoplay=1`;
      case 'archive':
        return source.url;
      default:
        return '';
    }
  };

  return (
    <div className="relative pt-[56.25%] w-full">
      <iframe
        className="absolute inset-0 w-full h-full"
        src={getEmbedUrl(source)}
        title={source.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        referrerPolicy="origin"
      />
    </div>
  );
};

export default VideoPlayer;