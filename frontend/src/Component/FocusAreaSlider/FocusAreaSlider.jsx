import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";  // Import axios
import "./FocusAreaSlider.css";
import { Link } from "react-router-dom";

const FocusAreaSlider = () => {
  const sliderRef = useRef(null);
  const [focusAreas, setFocusAreas] = useState([]);

  // Fetch API data using axios
  useEffect(() => {
    axios
      .get("https://api.iirhe.org/api/all-discipline")
      .then((response) => {
        if (response.status === 200) {
          // Map the API data into the format we need
          const areas = response.data.data.map((item) => ({
            name: item.DisciplinesName,
            image: `https://api.iirhe.org/${item.DisciplinesLogo}`,
          }));
          setFocusAreas(areas);
        }
      })
      .catch((error) => console.error("Error fetching disciplines:", error));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
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
    <section className="focus-area-section py-5">
      <div className="container position-relative">
        <h2 className="text-center mb-4">Explore your Focus Area</h2>

        <button
          className="custom-prev-button"
          onClick={() => sliderRef.current && sliderRef.current.slickPrev()}
        >
          <i className="bi bi-arrow-left-short"></i>
        </button>

        <Slider ref={sliderRef} {...settings}>
          {focusAreas.length > 0 ? (
            focusAreas.map((area, index) => (
              <div key={index} className="px-2">
                <Link style={{ textDecoration: "none" }} to={`/courses/course-overview/${area.name}`}>
                  <div className="focus-area-tile">
                    <img src={area.image} alt={area.name} className="img-fluid" />
                    <p className="m-0">{area.name}</p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="px-2">
              <div className="focus-area-tile">
                <p>Loading...</p>
              </div>
            </div>
          )}
        </Slider>

        <button
          className="custom-next-button"
          onClick={() => sliderRef.current && sliderRef.current.slickNext()}
        >
          <i className="bi bi-arrow-right-short"></i>
        </button>
      </div>
    </section>
  );
};

export default FocusAreaSlider;
