import React, { useEffect, useState } from "react";
import './discipline.css'
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Discipline = () => {
  const [focusAreas, setFocusAreas] = useState([])

  const getapiData = async () => {
    try {
      const res = await axios.get("https://api.iirhe.org/api/all-discipline")
      if (res.status === 200) {
        setFocusAreas(res.data.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
    getapiData()
  }, [])
  return (
    <>
     <Helmet>
        <title>Explore Disciplines - IIRHE</title>
        <meta
          name="description"
          content="Explore various academic disciplines at IIRHE. Find courses and programs in multiple fields including Science, Technology, Arts, and more."
        />
        <meta
          name="keywords"
          content="IIRHE disciplines, academic disciplines, science programs, technology courses, arts programs, IIRHE courses"
        />
        <meta
          name="author"
          content="IIRHE - International Institute for Research and Higher Education"
        />
        <meta
          property="og:title"
          content="Explore Disciplines at IIRHE - Science, Technology, Arts, and More"
        />
        <meta
          property="og:description"
          content="Discover a wide variety of academic disciplines at IIRHE. Browse through programs in Science, Technology, Arts, and more to find the right course for you."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.iirhe.org/disciplines"
        />
        <meta
          property="og:image"
          content="https://www.iirhe.org/images/og-discipline.jpg" // Example image URL for social media sharing
        />
      </Helmet>
    <section className="disciplines">
      <div className="documentShadow mx-auto" style={{backgroundColor:"var(--color-blue)"}}>
        <h3 className="text-white">Disciplines</h3>
      </div>
      <div>
        <section className="focus-area-section py-5">
          <div className="container">
            <div className="row">
              {focusAreas.map((area, index) => (
                <div key={index} className="col-6 col-md-4 col-lg-3 mb-4">
                  <Link to={`/courses/course-overview/${area.DisciplinesName}`} className="text-decoration-none">
                    <div className="focus-area-tile text-center p-3 shadow-sm bg-white rounded">
                      <img
                        src={`https://api.iirhe.org/${area.DisciplinesLogo}`}
                        alt={area.DisciplinesName}
                        className="img-fluid mb-2"
                      />
                      <p className="m-0">{area.DisciplinesName}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
    </>
  );
};

export default Discipline;
