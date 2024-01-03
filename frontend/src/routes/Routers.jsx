import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import SportInjuries from "../pages/SportInjuries";
import InternalMedicine from "../pages/InternalMedicine";
<<<<<<< HEAD
=======
import ProtectedRoute from "./ProtectedRoutes";
import PublicRoute from "./PublicRoutes";
>>>>>>> v-branch
import { useSelector } from "react-redux";
import Spinner from "../components/Spinners/Spinner";
import Welcome from "../components/Welcome/Welcome";

const Routers = () => {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/welcome" element={<Welcome />} />
=======
          <Route
            path="/"
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="/home"
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route path="/services" element={<Services />} />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/welcome"
            element={
              <ProtectedRoute>
                <Welcome />
              </ProtectedRoute>
            }
          />
>>>>>>> v-branch
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctor-details" element={<DoctorDetails />} />
          <Route
            path="/orthopaedics-sports-injuries"
            element={<SportInjuries />}
          />
          <Route path="/internal-medicine" element={<InternalMedicine />} />
        </Routes>
      )}
    </>
  );
};

export default Routers;
