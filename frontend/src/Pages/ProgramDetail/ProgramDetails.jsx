import React, { useEffect, useState } from "react";
import bannerImage from "../../Images/banner1.png";
import ProgramsSlider from "../ProgramsSlider/ProgramsSlider";
import { Link } from "react-router-dom";
import diciplainImage from "../../Images/diciplain.png";
import location from "../../Images/location.png";
import institution from "../../Images/institution.png";
import deci1 from "../../Images/Discipline1.png";
import deci2 from "../../Images/Discipline2.png";
import deci3 from "../../Images/Discipline3.png";
import deci4 from "../../Images/Discipline4.png";
import deci5 from "../../Images/Discipline5.png";
import deci6 from "../../Images/Discipline6.png";
import deci7 from "../../Images/Discipline7.png";
import deci8 from "../../Images/Discipline8.png";
import deci9 from "../../Images/Discipline9.png";
import deci10 from "../../Images/Discipline10.png";
import './programDetail.css'
const ProgramDetails = () => {
  const PhDPrograms = [
    { name: "PhD in Science", link: "/universities/science", image: deci1 },
    {
      name: "PhD in Corporate Law",
      link: "/universities/corporate-law",
      image: deci2,
    },
    {
      name: "PhD in Cloud Computing",
      link: "/universities/cloud-computing",
      image: deci3,
    },
    {
      name: "PhD in Film Studies",
      link: "/universities/film-studies",
      image: deci4,
    },
    {
      name: "PhD in Urban and Regional Planning",
      link: "/universities/urban-regional-planning",
      image: deci5,
    },
    {
      name: "PhD in Nutrition and Dietetics",
      link: "/universities/nutrition-dietetics",
      image: deci6,
    },
    {
      name: "PhD in International Communication",
      link: "/universities/international-communication",
      image: deci7,
    },
    {
      name: "PhD in Educational Leadership",
      link: "/universities/educational-leadership",
      image: deci8,
    },
    {
      name: "PhD in Artificial Intelligence",
      link: "/universities/artificial-intelligence",
      image: deci9,
    },
    {
      name: "PhD in Interdisciplinary Social Sciences",
      link: "/universities/interdisciplinary-social-sciences",
      image: deci10,
    },
  ];
  const dropdowns = [
    {
      title: "Discipline",
      items: ["Engineering", "Science", "Arts"],
      icon: "🎓",
    },
    {
      title: "Location",
      items: ["New York", "Los Angeles", "Chicago"],
      icon: "📍",
    },
    { title: "Institution", items: ["Harvard", "MIT", "Stanford"], icon: "🏫" },
  ];
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  const [visiblePrograms, setVisiblePrograms] = useState(10);

  const showMorePrograms = () => {
    setVisiblePrograms(programs.length);
  };
  const programs = [
    "PhD in Computer Science",
    "PhD in Data Science",
    "PhD in Artificial Intelligence",
    "PhD in Cybersecurity",
    "PhD in Information Technology",
    "PhD in Big Data Analytics",
    "PhD in Cloud Computing",
    "PhD in Software Engineering",
    "PhD in Computational Biology",
    "PhD in Robotics",
    "PhD in Machine Learning",
    "PhD in Natural Language Processing",
    "PhD in Quantum Computing",
    "PhD in Blockchain",
  ];
  return (
    <>
      <div
        className="BannerImage"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="container">
        <div className="MainBox">
          <div className="pagesHeading text-center">
            <h1 className="text-dark">
              Data-Driven Dream Your PhD Journey in IT & Data Science
            </h1>
          </div>
        </div>
        </div>
      </div>
      <section className="dropdown-section">
        <div className="row text-center">
          {/* Discipline Dropdown */}
          <div className="col-md-4 col-4 borderRightProgram">
            <div className="bg-light">
              <div className="dropdown">
                <button
                  className="btn btn-light dropdown-toggle"
                  type="button"
                  id="disciplineDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={diciplainImage}
                    alt="Discipline"
                    className="mb-2"
                  />
                  <br />
                  Discipline
                </button>
                <ul
                  className="dropdown-menu bg-transparent dropDetails"
                  aria-labelledby="disciplineDropdown"
                >
                  {PhDPrograms.map((item, index) => (
                    <li className="programlistbg">
                      <div className="d-flex gap-3">
                        <img
                          src={item.image}
                          style={{ width: "30px", height: "30px" }}
                          alt="images"
                        />
                        <div>
                          <p>{item.name}</p>
                          <p className="mb-0">
                            <Link className="text-danger" to={item.link}>
                              View Universities
                            </Link>
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Location Dropdown */}
          <div className="col-md-4 col-4 borderRightProgram">
            <div className="bg-light">
              <div className="dropdown">
                <button
                  className="btn btn-light dropdown-toggle"
                  type="button"
                  id="locationDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={location}
                    alt="Location"
                    className="mb-2"
                  />
                  <br />
                  Location
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="locationDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="#">
                      USA
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Canada
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Germany
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Institution Dropdown */}
          <div className="col-md-4 col-4 borderRightProgram">
            <div className="bg-light">
              <div className="dropdown">
                <button
                  className="btn btn-light dropdown-toggle"
                  type="button"
                  id="institutionDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={institution}
                    alt="Institution"
                    className="mb-2"
                  />
                  <br />
                  Institution
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="institutionDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="#">
                      Harvard
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      MIT
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Stanford
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="AllPageContent">
        <div className="container">
          <p className="pageContent">
            In today's data-driven world, information technology (IT) and data
            science are critical disciplines that propel innovation and
            decision-making. IT includes the administration and application of
            technological systems, guaranteeing effective operations and safe
            data transfer amongst enterprises. On the other side, data science
            uses computational, machine learning, and statistical analysis
            methods to extract meaningful information from massive amounts of
            data.
          </p>
          <p className="pageContent">
            Organisations can use data for strategic advantage thanks to the
            collaboration between IT and data science, which promotes
            developments in fields like cybersecurity, business analytics, and
            artificial intelligence. A PhD in one of these linked subjects gives
            students the additional training they need to take on challenging
            problems, produce significant research, and progress technology. Our
            consulting service is committed to supporting prospective students
            in their application process by assisting them in locating courses
            that fit their areas of interest in study and desired careers.
          </p>
        </div>
      </section>

      <ProgramsSlider />

      <section className="explorePrograms">
        <div className="AllPageContent">
          <div className="container">
            <h1 className="text-white mb-4">
              Explore all PHDs in IT & Data Science
            </h1>
            <ol>
              {programs.slice(0, visiblePrograms).map((program, index) => (
                <li className="programs_list" key={index}>
                  {program}
                </li>
              ))}
            </ol>
            <button className="cancelBtn" onClick={showMorePrograms}>
              Show More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramDetails;
