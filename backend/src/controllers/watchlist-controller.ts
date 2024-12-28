import { Request, Response } from "express";
import { watchlist } from "../db/query";

const getWatchlist = async (_req: Request, res: Response): Promise<any> => {
    const { user } = res.locals;
    const query = await watchlist.find({ user_id: user.id }, "movie_id");
    const list: number[] = query.map((q: { movie_id: number }) => q.movie_id);
    res.status(200).json(list);
}

const toggleWatchlist = async (req: Request, res: Response): Promise<any> => {
    const { user } = res.locals;
    const { movieId } = req.params;
    const query = await watchlist.find(
        { movie_id: movieId, user_id: user.id },
        "movie_id"
    );
    if (query.length < 1) {
        await watchlist.new({ movie_id: movieId, user_id: user.id });
        return res.status(204).json();
    }

    await watchlist.delete({ movie_id: movieId, user_id: user.id });
    return res.status(204).json();
}

export default {
    getWatchlist,
    toggleWatchlist
} satisfies Record<string, Function>;
