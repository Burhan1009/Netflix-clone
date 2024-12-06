export interface Movie {
  id: number;
  title: string;
  name?: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  release_date: string;
  first_air_date?: string;
  media_type?: string;
}

export interface TMDBResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
  size?: number;
  official?: boolean;
  published_at?: string;
}

export interface VideoResponse {
  id: number;
  results: Video[];
}

export interface VideoSource {
  type: 'youtube' | 'vimeo' | 'dailymotion' | 'archive';
  url: string;
  title: string;
  thumbnail?: string;
}