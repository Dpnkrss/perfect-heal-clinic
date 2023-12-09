import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Carousel = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    // eslint-disable-next-line react/prop-types
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentIndex(
      // eslint-disable-next-line react/prop-types
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, interval);
    return () => clearInterval(intervalId);
  }, [currentIndex, interval]);
  return (
    <div className="relative">
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-red-500 text-white p-4 rounded-full"
        onClick={prevImage}
      >
        &lt;
      </button>
      <img
        src={images[currentIndex]}
        alt={`slide-${currentIndex}`}
        className="w-full h-auto"
      />
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-red-500 text-white p-4 rounded-full"
        onClick={nextImage}
      >
        &gt;
      </button>
    </div>
  );
};
export default Carousel;
