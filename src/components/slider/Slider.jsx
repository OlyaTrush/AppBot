import { useState } from "react";
import PropTypes from "prop-types";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider-container relative">
      <img
        src={slides[current]}
        alt={`slide-${current}`}
        className="w-full h-64 object-cover"
      />

      <div className="navigation-buttons absolute top-0 bottom-0 flex justify-between items-center w-full px-3 text-white">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill className="text-btn-acc" />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill className="text-btn-acc" />
        </button>
      </div>

      <div className="slide-indicators absolute bottom-0 left-0 right-0 flex justify-center pb-2">
        {slides.map((_, i) => (
          <div
            key={"circle" + i}
            className={`indicator-dot w-3 h-3 rounded-full ${
              i === current ? "bg-white" : "bg-gray-500"
            } mr-2`}
            onClick={() => setCurrent(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};

Slider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
