import { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 3 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 3 : currentIndex - 1);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="flex">
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <img
            key={index}
            className="w-full object-contain rounded-lg shadow-lg"
            src={image}
            alt={`Slide ${index}`}
            />
            ))}
            </div>
      <div className="absolute justify-center top-1/2 transform -translate-y-1/2">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={prevSlide}
          >
          &lt;
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={nextSlide}
          >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
