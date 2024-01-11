import { useSelector } from "react-redux";
import Welcome from "../Welcome/Welcome";
const Content = () => {
  const { doctor } = useSelector((state) => state.doctor);

  return (
    <Welcome>
      <h1 className="text-2xl font-bold mb-4">
        Hello {doctor?.fullName.split(" ")[0]}
      </h1>
      <p>Welcome</p>
    </Welcome>
  );
};

export default Content;
