export interface ApiData {
  page: number,
  results: Array<object>;
  total_pages: number;
  total_results: number;
}

export interface UnmapedMovieData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieData {
  id: number;
  genreIds: Array<number>;
  title: string;
  posterPath: string;
  popularity: number;
  releaseDate: string;
  voteAverage: number;
  voteCount: number;
}

