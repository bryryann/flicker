import { Request, Response } from "express";
import { favorites } from "../db/query";

const getFavorites = async (_req: Request, res: Response): Promise<any> => {
    const { user } = res.locals;
    const query = await favorites.find({ user_id: user.id }, "movie_id");
    const favs: number[] = query.map((q: { movie_id: number }) => q.movie_id);
    res.status(200).json(favs);
}

const toggleFavorite = async (req: Request, res: Response): Promise<any> => {
    const { user } = res.locals;
    const { movieId } = req.params;
    const query = await favorites.find({ movie_id: movieId, user_id: user.id }, "movie_id");
    if (query.length < 1) {
        await favorites.new({ movie_id: movieId, user_id: user.id });
        return res.status(204).json();
    }

    await favorites.delete({ movie_id: movieId, user_id: user.id });
    return res.status(204).json();
}

export default {
    getFavorites,
    toggleFavorite
} satisfies Record<string, Function>;
