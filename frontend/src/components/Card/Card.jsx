import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({ title, content, linkTo, topImg, bottomImg }) => {
  return (
    <div className="relative bg-slate-300 roundex x1 max-w-md  max-h-[19rem] p-8">
      {topImg && (
        <div className="top-0 left-0 w-12 h-12 m-5 block">
          <img src={topImg} />
        </div>
      )}
      <div className="text-left mb-5">
        <h2 className="text-xl font-semibold text-orange-400">{title}</h2>
      </div>
      <div className="text-orange-600 mb-5">{content}</div>
      {bottomImg && (
        <div className="absolute bottom-0 right-0 w-12 h-12 m-5">
          <img src={bottomImg} />
        </div>
      )}
      <div className="mb-4">
        <Link
          to={linkTo}
          className="text-orange-500 inline-block px-4 py-2 bg-slate-300 rounded transition duration-300 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
export default Card;
