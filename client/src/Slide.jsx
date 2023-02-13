import React, { useState } from "react";
import "./Slide.scss";
import img from "./assests/Lotus.jpg";

const Slide = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      title: "Slide 1",
      description: "Description for Slide 1",
      image: img,
    },
    {
      title: "Slide 2",
      description: "Description for Slide 2",
      image: img,
    },
    {
      title: "Slide 3",
      description: "Description for Slide 3",
      image: img,
    },
    {
      title: "Slide 4",
      description: "Description for Slide 1",
      image: img,
    },
    {
      title: "Slide 5",
      description: "Description for Slide 2",
      image: img,
    },
    {
      title: "Slide 6",
      description: "Description for Slide 3",
      image: img,
    },
    {
      title: "Slide 7",
      description: "Description for Slide 1",
      image: img,
    },
    {
      title: "Slide 8",
      description: "Description for Slide 2",
      image: img,
    },
    {
      title: "Slide 9",
      description: "Description for Slide 3",
      image: img,
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % (slides.length - 6));
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 6 : prevIndex - 1
    );
  };

  return (
    <div id="slide" className="slide-container">
      <div className="category">
        <div className="cato">
          <div className="head">Categories</div>
          <p className="content">
            Much destination here but don't be confuse! It's already grouped by
            category.
          </p>
        </div>
        <div>
          <button className="btn" onClick={handlePrev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <button className="btn" onClick={handleNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="btn-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          {/* <button onClick={handleNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button> */}
        </div>
      </div>
      <div
        className="slide-item"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
          width: "33.3vw",
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="single-slide">
            <img className="img" src={slide.image} alt={slide.title} />
            <h3>{slide.title}</h3>
            {/* <p>{slide.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide;
