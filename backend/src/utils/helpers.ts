import { QueryResultRow } from "pg"

export const movieIdMapper = (query: QueryResultRow): number[] => {
    const list = query.map((q: { movie_id: number }) => q.movie_id);
    return list;
}
