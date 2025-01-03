import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useAppSelector } from "../../redux/store";
import { MovieData } from "../../types";
import Card from "../Card";
import "swiper/swiper-bundle.css";
import "./style.css";

interface MovieSliderProps {
    data: MovieData[];
}

const MovieSlider: React.FC<MovieSliderProps> = ({ data }) => {
    const favs = useAppSelector(state => state.favorites);
    const wlist = useAppSelector(state => state.watchlist);
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView="auto"
            modules={[Navigation, Pagination]}
            navigation={true}
            pagination={true}
            className="movie-swiper"
        >
            {
                data.map((m) => (
                    <SwiperSlide
                        key={m.id}
                        className="slide-component"
                    >
                        <Card
                            movie={m}
                            isFavorite={favs.includes(m.id)}
                            isWatchlist={wlist.includes(m.id)}
                        />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default MovieSlider;
