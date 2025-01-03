import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { findUser } from "../../services/users-service";
import { UserData, MovieData } from "../../types";
import { getMoviesById } from "../../services/movies-service";
import { toMovieData } from "../../utils/mappers";
import Loading from "../../components/Loading";
import ProfileHeader from "../../components/ProfileHeader";
import NotFound from "../../pages/NotFound";
import "./style.css";

const Profile: React.FC = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState<UserData>();
  const [favorites, setFavorites] = useState<MovieData[]>();
  const [watchlist, setWatchlist] = useState<MovieData[]>();
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async (id: string) => {
      try {
        const res = await findUser(id);
        setUserData(res);
      } catch {
        setNotFound(true);
      }
    }
    fetchData(userId!);
  }, [userId]);

  useEffect(() => {
    if (!userData) return;

    const fetchMovies = async () => {
      try {
        const favs = await getMoviesById(userData!.favorites);
        const wlist = await getMoviesById(userData!.watchlist);
        setFavorites(favs.map((m) => toMovieData(m)));
        setWatchlist(wlist.map((m) => toMovieData(m)));
      } catch {
        setNotFound(true);
      }
    };
    fetchMovies();
  }, [userData]);

  if (notFound) return <NotFound />;
  if (userData === undefined) return <Loading />;

  return (
    <div className="profile-page">
      <div className="back-btn">
        <Link to="/app/" >
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </Link>
      </div>
      <div className="profile-content-container">
        <ProfileHeader
          id={userData.id}
          username={userData.username}
          creationDate={userData.created_at}
          favCount={userData.favorites.length}
          planCount={userData.watchlist.length}
        />
      </div>
    </div>
  )
}

export default Profile;
