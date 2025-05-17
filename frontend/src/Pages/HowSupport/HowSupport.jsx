import React from "react";
import supportImg1 from "../../Images/support1.png";
import supportImg2 from "../../Images/support2.png";
import supportImg3 from "../../Images/support3.png";
import supportImg4 from "../../Images/support4.png";
import consultant from "../../Images/consultant.png";
import { Link } from "react-router-dom";
import "./support.css";
import ConsultantForm from "../../Component/ConsultantForm/ConsultantForm";
const HowSupport = () => {
  return (
    <>
      {/* <section className="Homeabout">
        <div className="container">
          <div>
            <h2 className="spacingBottom">
              <b>How we support your academic Journey?</b>
            </h2>

            <h4>Student Experience</h4>
            <p className="spacingBottom">
              Many current and past students describe their time as
              life-changing. Students engage in professional development
              programs, networking events, and workshops with the help of
              supportive faculty members and a lively community, preparing them
              for successful careers. Testimonials emphasize how mentoring and a
              collaborative spirit influence students' academic paths.
            </p>
            <h2>Diversity and Inclusion</h2>
            <p className="spacingBottom">
              Our dedication lies in creating an atmosphere that is both
              inclusive and diverse, honouring the various viewpoints and
              backgrounds of individuals. Our initiatives support under
              represented groups in academia, ensuring that all voices are heard
              and valued.
            </p>

            <h2>Call to Action</h2>
            <p>
              To find out more about our PhD program, the outstanding faculty,
              and the exciting academic community that awaits you, we cordially
              encourage you to browse our website. Get in touch for additional
              details or submit an application right now to get started on the
              path to academic success!
            </p>
          </div>
        </div>
      </section> */}

      <section className="consultant">
        <ConsultantForm />
      </section>
      <section className="container support">
        <div className="row align-items-center">
          <div className="col-md-3 col-6">
            <div className="supportCard">
              <Link to={"/univercity"}>
                <img src={supportImg1} className="supportImg" alt="" />
                <h5>University</h5>
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="supportCard">
              <Link to={"/students"}>
                <img src={supportImg2} className="supportImg" alt="" />
                <h5>Students</h5>
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="supportCard">
              <Link to={"/our-guide"}>
                <img src={supportImg3} className="supportImg" alt="" />
                <h5>Guides</h5>
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="supportCard">
              <Link to={"/for-mentor/why-become-mentor"}>
                <img src={supportImg4} className="supportImg" alt="" />
                <h5>Mentors</h5>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="whoweare">
        <div className="container">
          <h3 className="text-white">Who We Are?</h3>
          <p className="text-white">
            At IIRHE, we are on a mission to revolutionize the PhD experience.
            We provide 360-degree support to PhD students and aspire researchers
            at every stage of their academic journey.
          </p>
          <div className="row">
            <div className="col-md-4">
              <div className="univercityAboutBox">
                <h2>MENTORS</h2>
                <p>
                  We offer mentors the opportunity to guide PhD students through
                  their journey, from topic selection to documentation, while
                  advancing their own careers.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="univercityAboutBox">
                <h2>PHD GUIDES</h2>
                <p>
                  We connect universities with experienced guides to build
                  strong research departments and support academic excellence
                  and accreditation.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="univercityAboutBox">
                <h2>MENTORS</h2>
                <p>
                  For Students: We assist you in refining your research focus
                  and structuring your documents, ensuring you’re empowered with
                  the tools and guidance to thrive in your PhD journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowSupport;
