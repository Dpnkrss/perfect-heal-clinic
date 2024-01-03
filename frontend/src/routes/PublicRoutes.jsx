import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function PublicRoutes({ children }) {
  if (localStorage.getItem("token")) {
<<<<<<< HEAD
    return <Navigate to="/" />;
=======
    return <Navigate to="/welcome" />;
>>>>>>> v-branch
  } else {
    return children;
  }
}
