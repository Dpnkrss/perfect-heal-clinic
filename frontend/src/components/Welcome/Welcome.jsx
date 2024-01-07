import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import Schedule from "../../pages/Schedule";

// eslint-disable-next-line react/prop-types
const Welcome = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
};

export default Welcome;
