import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import axios from "axios";
import { setDoctor } from "../redux/features/docSlice";

// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({ children }) {
  const dispatch = useDispatch();
  const { doctor } = useSelector((state) => state.doctor);

  //eslint-disable-next-line
  const getDoctor = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/doctor/getDocData",
        {
          token: localStorage.getItem("token"),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        dispatch(setDoctor(res.data.data));
      } else {
        <Navigate to="/login" />;
        localStorage.clear();
      }
    } catch (error) {
      dispatch(hideLoading());
      localStorage.clear();
      console.log(error);
    }
  };
  useEffect(() => {
    if (!doctor) {
      getDoctor();
    }
  }, [doctor, getDoctor]);
  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}
