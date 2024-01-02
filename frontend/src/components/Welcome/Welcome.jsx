import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";

const Welcome = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Content />
    </div>
  );
};

export default Welcome;
