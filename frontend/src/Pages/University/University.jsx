import React, { useEffect, useState } from "react";
import axios from "axios";
import search from "../../Images/search.png";
import "./university.css";
import { Helmet } from "react-helmet";

const University = () => {
  const [zones, setZones] = useState([]); // State to store API data
  const [showMore, setShowMore] = useState({}); // State to track expanded/collapsed zones

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Fetch data from API using axios
    const fetchUniversities = async () => {
      try {
        const response = await axios.get(
          "https://api.iirhe.org/api/all-multi-universities-accordign-zone"
        );

        if (response.data.success) {
          setZones(response.data.data);
          const initialShowMoreState = response.data.data.reduce(
            (acc, zone) => ({
              ...acc,
              [zone.UniversityZone]: false, // Default to collapsed
            }),
            {}
          );
          setShowMore(initialShowMoreState);
        }
      } catch (error) {
        console.error("Error fetching university data:", error);
      }
    };

    fetchUniversities();
  }, []);

  // Toggle visibility for a specific zone
  const toggleVisibility = (zone) => {
    setShowMore((prevState) => ({
      ...prevState,
      [zone]: !prevState[zone],
    }));
  };

  return (
    <>
     <Helmet>
        <title>University Search - Find Accredited Universities | IIRHE</title>
        <meta name="description" content="Explore accredited universities and PhD programs across different zones in India. Find the best university that matches your professional aspirations." />
        <meta name="keywords" content="university search, accredited universities, PhD programs, UGC approved universities, NAAC accredited universities, higher education" />
        <meta name="author" content="Your Company Name" />
      </Helmet>
      <section className="univercityMain">
        <div className="container">
          <div className="documentShadow mx-auto">
            <img src={search} alt="mentors" />
            <h3>Search Your University</h3>
          </div>
          <p className="universityContent">
            Our platform links students to a selection of universities that
            match their interests and professional aspirations. During the
            screening process of institutions, we verify that they are
            accredited by NAAC and approved by UGC, demonstrating their
            dedication to providing quality education and advancing research.
            Our extensive database enables students to explore leading
            universities that provide PhD programs, enabling a fulfilling
            journey with promising research prospects. If you're seeking
            positions or renowned schools to pursue your studies effectively and
            efficiently.
          </p>
        </div>
      </section>

      <section className="northSouth">
        <div className="container">
          <div className="row">
            {zones.map((zone, index) => (
              <div className="col-md-6 mb-3" key={index}>
                <div className="eastIndiaCard">
                  <h2 className="mb-4">{zone.UniversityZone}</h2>
                  <ol>
                    {zone.Universities.slice(
                      0,
                      showMore[zone.UniversityZone]
                        ? zone.Universities.length
                        : 5
                    ).map((university, uniIndex) => (
                      <li key={uniIndex}>{university}</li>
                    ))}
                  </ol>
                  <button
                    className="viewfulllist"
                    onClick={() => toggleVisibility(zone.UniversityZone)}
                  >
                    {showMore[zone.UniversityZone] ? "Show Less" : "View Full List"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default University;
