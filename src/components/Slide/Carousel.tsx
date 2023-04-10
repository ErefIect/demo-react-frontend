import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";

import "./Carousel.css";

type Slide = {
  src: string;
  alt: string;
};

type Slides = {
  data: Slide[];
};

function Carousel({ data }: Slides) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1: slide - 1);
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />

      {data.map((item: Slide, idx: number) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide-hide"}
          />
        );
      })}

      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nextSlide}
      />

      <span className="indicators">
        {data.map((_: Slide, idx: number) => {
          return (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
}

export default Carousel;
