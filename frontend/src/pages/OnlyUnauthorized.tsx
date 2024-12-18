import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/store";

interface OnlyUnauthProps extends React.PropsWithChildren {
  children: React.ReactNode;
}

// This route is only accessible if user is NOT logged
// *opposite of PrivateRoute
const OnlyUnauthorized: React.FC<OnlyUnauthProps> = ({ children }) => {
  const user = useAppSelector(state => state.user);

  return user.isSigned
    ? <Navigate replace={true} to="/app" />
    : children;
}

export default OnlyUnauthorized;
