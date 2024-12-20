import "./style.css";

type MovieGridVariant = "trending" | "search";
interface MovieGridProps {
    variant?: MovieGridVariant;
}

const MovieGrid: React.FC<MovieGridProps> = ({ variant = "trending" }) => {
    console.log(variant);
    return (
        <div className="movie-grid">
            <p>movie grid</p>
        </div>
    );
}

export default MovieGrid
