import { useAppSelector } from "../redux/store";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps extends React.PropsWithChildren {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const user = useAppSelector(state => state.user);

  return user.isSigned
    ? children
    : <Navigate replace={true} to="/access" />;
}

export default PrivateRoute;
