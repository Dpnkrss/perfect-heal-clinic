import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({ title, content, linkTo, topImg, bottomImg }) => {
  const bgColorClass =
    title === "Internal Medicine" ? "bg-[#F15A2D]" : "bg-slate-300";
  const isInternalMedicine = title === "Internal Medicine";
  const linkTextColorClass = isInternalMedicine
    ? "text-white"
    : "text-orange-600";
  const linkBgColorClass = isInternalMedicine ? "bg-[#F15A2D]" : "bg-slate-300";

  return (
    <div
      className={`relative ${bgColorClass} roundex x1 max-w-md  max-h-[19rem] p-8 rounded-lg`}
    >
      {topImg && (
        <div className="top-0 left-0 w-12 h-12 m-5 block">
          <img src={topImg} />
        </div>
      )}
      <div className="text-left mb-5">
        <h2
          className={`text-xl font-semibold ${
            isInternalMedicine ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h2>
      </div>
      <div
        className={`mb-5 ${isInternalMedicine ? "text-white" : "text-black"} `}
      >
        {content}
      </div>
      {bottomImg && (
        <div className="absolute bottom-0 right-0 w-12 h-12 m-5">
          <img src={bottomImg} />
        </div>
      )}
      <div className="mb-4">
        <Link
          to={linkTo}
          className={`inline-block px-4 py-2 ${linkBgColorClass} ${linkTextColorClass} rounded transition duration-300 hover:bg-blue-500 focus:outline-none focus:bg-blue-500`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
export default Card;
