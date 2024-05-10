import React, { useState } from "react";
import '../slides/slide.scss'
interface Slide {
  url: string;
}

interface SlidesProps {
  slides: Slide[];
}

const Slides: React.FC<SlidesProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };

  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover"
  };

  return (
    <div className="slide-container">
      <div className="slide" style={slideStyles}></div>
      <div className="slide-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleSlideChange(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slides;
