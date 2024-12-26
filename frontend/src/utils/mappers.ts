import { UnmapedMovieData, MovieData } from "../types";

export const toMovieData = (data: UnmapedMovieData): MovieData => (
    {
        id: data.id,
        title: data.title,
        posterPath: data.poster_path,
        popularity: data.popularity,
        releaseDate: data.release_date,
        voteAverage: data.vote_average,
        voteCount: data.vote_count
    }
);
