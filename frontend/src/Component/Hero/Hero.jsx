import React from "react";
import "./hero.css";
import FocusAreaSlider from "../FocusAreaSlider/FocusAreaSlider";
import HowSupport from "../../Pages/HowSupport/HowSupport";
const Hero = () => {
  return (
    <>
      <div className="homeBanner">
        <div className="overlay">
          <div className="container-fluid">
            <div className="heroContent">
              <h2>
                Personalized Mentorship, Expert Guidance, and Complete Support
                for Aspiring and Pursuing PhD Students.
              </h2>
              <div className="position-relative heroSearchbar">
                <i className="bi bi-search position-absolute search-icon"></i>
                <input
                  type="text"
                  placeholder="Search for your research topic or area of interest..."
                  className="form-control heroInput"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="univercityAbout">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="univercityAboutBox">
                <h4>MENTORSHIP</h4>
                <p>
                  Our mentors guide you through every phase of your PhD journey,
                  breaking down complex steps into manageable tasks and keeping
                  you motivated to achieve your goals.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="univercityAboutBox">
                <h4>TOPIC SELECTION</h4>
                <p>
                  We help you choose a meaningful and impactful research topic
                  that aligns with your goals and sets the foundation for a
                  successful PhD journey.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="univercityAboutBox">
                <h4>RESEARCH GUIDANCE</h4>
                <p>
                  We provide clear guidance on structuring your research
                  documents—proposals, synopses, and more—so you stay organized
                  and present your work professionally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="container support">
        <div className="row align-items-center">
          <div className="col-md-4">
            <h2 className="text-white fs-1">Support and Connection</h2>
          </div>
          <div className="col-md-2 col-6">
            <div className="supportCard">
              <img src={supportImg1} className="supportImg" alt="" />
              <h5>University</h5>
            </div>
          </div>
          <div className="col-md-2 col-6">
            <div className="supportCard">
              <img src={supportImg2} className="supportImg" alt="" />
              <h5>Students</h5>
            </div>
          </div>
          <div className="col-md-2 col-6">
            <div className="supportCard">
              <Link to={"/guides"}>
                <img src={supportImg3} className="supportImg" alt="" />
                <h5>Guides</h5>
              </Link>
            </div>
          </div>
          <div className="col-md-2 col-6">
            <div className="supportCard">
              <img src={supportImg4} className="supportImg" alt="" />
              <h5>Mentors</h5>
            </div>
          </div>
        </div>
      </section> */}
      {/* 
      <section className="Homeabout">
        <div className="container">
          <div>
            <h2>
             About Us
            </h2>
            <p className="spacingBottom">
              Greetings and welcome to our PhD portal, where we are dedicated to
              developing the next wave of scholars and inventors. Our goal is to
              empower people to seek PhD programs by creating a dynamic platform
              that connects potential candidates with experienced mentors,
              prestigious universities, and a wealth of resources. Our scholarly
              community is devoted to conducting innovative research that
              tackles the most critical issues facing worldwide with outstanding
              talent, accuracy and purpose.
            </p>
            <h2>Our Mission</h2>
            <p className="spacingBottom">
              Our goal is to enable students to fulfill their PhD dreams by
              providing them with support throughout their time as scholars.
            </p>

          </div>
        </div>
      </section> */}

      <FocusAreaSlider />
      <HowSupport />
    </>
  );
};

export default Hero;
