import axios from 'axios';
import { VideoSource } from '../types/movie';

// Internet Archive API endpoint
const ARCHIVE_API = 'https://archive.org/advancedsearch.php';

export const searchInternetArchive = async (query: string): Promise<VideoSource[]> => {
  try {
    const response = await axios.get(ARCHIVE_API, {
      params: {
        q: `${query} AND mediatype:(movies)`,
        fl: ['identifier', 'title', 'description', 'thumb'],
        output: 'json',
        rows: 5
      }
    });

    const docs = response.data.response.docs;
    return docs.map((doc: any) => ({
      type: 'archive',
      url: `https://archive.org/embed/${doc.identifier}`,
      title: doc.title,
      thumbnail: doc.thumb
    }));
  } catch (error) {
    console.error('Error fetching Internet Archive videos:', error);
    return [];
  }
};

export const getAlternativeVideoSources = async (title: string): Promise<VideoSource[]> => {
  const sources: VideoSource[] = [];
  
  try {
    // Get Internet Archive results
    const archiveResults = await searchInternetArchive(title);
    sources.push(...archiveResults);
    
    return sources;
  } catch (error) {
    console.error('Error fetching alternative video sources:', error);
    return sources;
  }
};