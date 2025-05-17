import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import sliderImage from "../../Images/programSliderImage.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./programslider.css"; // Create a separate CSS file for styling

const ProgramsSlider = () => {
  const sliderRef = useRef(null); // Create a reference for the slider
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      const data = [
        {
          id: 1,
          imageUrl: sliderImage,
          description: "Computer Science",
        },
        {
          id: 2,
          imageUrl: sliderImage,
          description: "Data Science",
        },
        {
          id: 3,
          imageUrl: sliderImage,
          description: "Cybersecurity",
        },
        {
          id: 4,
          imageUrl: sliderImage,
          description: "Cloud Computing",
        },
      ];
      setPrograms(data);
    };

    fetchPrograms();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows, using custom buttons
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container-fluid programSlider">
      <div className="programs-slider-container" style={{ position: "relative" }}>
        <h2 className="text-center mb-4">Our Programs</h2>

        {/* Custom Previous Button */}
        <button
          className="custom-prev-button"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <i className="bi bi-arrow-left-short"></i>
        </button>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {programs.map((program) => (
            <div key={program.id} className="program-slide px-2">
              <img
                src={program.imageUrl}
                alt={`Program ${program.id}`}
              />
              <p className="program-description text-center">
                {program.description}
              </p>
            </div>
          ))}
        </Slider>

        {/* Custom Next Button */}
        <button
          className="custom-next-button"
          onClick={() => sliderRef.current.slickNext()}
        >
          <i className="bi bi-arrow-right-short"></i>
        </button>
      </div>
    </div>
  );
};

export default ProgramsSlider;
