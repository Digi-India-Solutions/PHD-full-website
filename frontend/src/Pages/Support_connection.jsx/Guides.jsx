import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import bannerImage from "../../Images/guides.png";
import "./supportConnections.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Guides = () => {
  const [guides, setGuides] = useState([]); // State to store API data

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Fetch guides data from API
    const fetchGuides = async () => {
      try {
        const response = await axios.get(
          "https://api.iirhe.org/api/all-profession-guide"
        );
        if (response.data.success) {
          setGuides(response.data.data); // Set the fetched data to state
        }
      } catch (error) {
        console.error("Error fetching guides data:", error);
      }
    };

    fetchGuides();
  }, []);

  return (
    <>
    <Helmet>
        <title>Guides for Professionals - Unlock Your Career Potential | IIRHE</title>
        <meta
          name="description"
          content="Explore professional guides to help you unlock your potential with the right career path, expertise, and guidance from experienced professionals."
        />
        <meta
          name="keywords"
          content="career guides, professional development, career advice, industry experts, professional experience, field of expertise, university guides"
        />
        <meta name="author" content="Your Company Name" />
      </Helmet>
      <div
        className="BannerImage"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="MainBox">
          <div className="pagesHeading text-center">
            <h1 className="text-dark">
              Unlock Your Potential: Comprehensive Guides for Every Step
            </h1>
          </div>
        </div>
      </div>
      <div className="guideSection">
        <div className="container pt-4">
          <div className="row">
            {guides.map((guide) => (
              <div className="col-md-6 col-6 mb-3" key={guide._id}>
                <div className="studentCard">
                  <div className="row guiderow">
                    <div className="col-md-4">
                      {/* Dynamically render guide image */}
                      <img
                        src={`https://api.iirhe.org/${guide.image}`}
                        className="w-100"
                        alt={guide.name}
                      />
                    </div>
                    <div className="col-md-8">
                      <div>
                        <p className="guideContent">
                          <b>Name :</b> {guide.name}
                        </p>
                        <p className="guideContent">
                          <b>Degree :</b> {guide.degree}
                        </p>
                        <p className="guideContent">
                          <b>Years Of Experience :</b> {guide.yearsOfExperience}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-12 guidecontentspacing">
                      <div>
                        <p className="guideContent">
                          <b>Field Of Expertise :</b> {guide.fieldExpertise}
                        </p>
                        <p className="guideContent">
                          <b>University :</b> {guide.university}
                        </p>
                        <p className="guideContent">
                          <Link to="/">
                            <b>Contact Details</b>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Guides;
