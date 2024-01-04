import { useSelector } from "react-redux";

const Content = () => {
  const { doctor } = useSelector((state) => state.doctor);

  return (
    <div className="flex-1 p-4">
      <h1 className="text-2xl font-bold mb-4">
        Hello {doctor?.fullName.split(" ")[0]}
      </h1>
      <p>Welcome</p>
    </div>
  );
};

export default Content;
