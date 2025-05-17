import React from "react";
import image from "../../Images/what1.png";
import "./mentor.css";
import image1 from "../../Images/mentor.png";
import image2 from "../../Images/knowledge.png";
import image3 from "../../Images/employe.png";
import image4 from "../../Images/advancement.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Why_mentor = () => {
  return (
    <>
    <Helmet>
        <title>Why Become a Mentor | IIRHE</title>
        <meta
          name="description"
          content="Discover why becoming a PhD mentor at IIRHE can enhance your career, help you give back to the academic community, and inspire the next generation of researchers."
        />
        <meta
          name="keywords"
          content="PhD mentorship, academic mentoring, research guidance, PhD mentor, professional development, career benefits"
        />
      </Helmet>
      <section className="why_become_mentor">
        <div className="container">
          <div className="documentShadow mx-auto">
            <img src={image} alt="mentors" />
            <h3>Why become a Mentor ?</h3>
          </div>
          <p>
            Becoming a PhD mentor is more than just guiding others—it’s an
            opportunity to give back to the academic community and shape the
            next generation of researchers. As a mentor, you don’t just pass on
            your knowledge; you inspire, motivate, and help others grow in their
            own academic journeys.
          </p>
          <p>Here’s why you should consider becoming a PhD mentor: </p>
        </div>
      </section>

      <section className="inspire_guide">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-10">
              <h3>Inspire and Guide the Next Generation </h3>
              <p>
                As a mentor, you have the chance to shape aspiring researchers
                and help them navigate the challenges of their PhD journey. Your
                guidance can inspire them to push boundaries, think critically,
                and approach their work with confidence. The impact you make
                will echo through their careers and the research they contribute
                to the world.
              </p>
            </div>
            <div className="col-md-2">
              <img src={image1} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="knowledge_experience">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-2">
              <img src={image2} alt="" />
            </div>
            <div className="col-md-10">
              <h3>Make Full Use of Your Knowledge and Experience</h3>
              <p>
                After completing your own PhD, mentoring provides a platform to
                apply the vast knowledge you’ve gained. By helping students with
                their research, topic selection, and documentation, you make
                meaningful use of your expertise. It's an opportunity to pass on
                what you've learned and to stay engaged with cutting-edge
                developments in your field.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="inspire_guide">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-10">
              <h3>Enhance Your Employability and Professional Network</h3>
              <p>
                Mentoring isn't just a rewarding experience—it also brings
                personal career benefits. By becoming a mentor, you broaden your
                professional network, collaborate with other experts in your
                field, and build a strong reputation in academia. Mentorship can
                open doors to new career opportunities, helping you stay
                relevant and employable even after completing your own PhD.
              </p>
            </div>
            <div className="col-md-2">
              <img src={image3} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="knowledge_experience">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-2">
              <img src={image4} alt="" />
            </div>
            <div className="col-md-10">
              <h3>Make Full Use of Your Knowledge and Experience</h3>
              <p>
                After completing your own PhD, mentoring provides a platform to
                apply the vast knowledge you’ve gained. By helping students with
                their research, topic selection, and documentation, you make
                meaningful use of your expertise. It's an opportunity to pass on
                what you've learned and to stay engaged with cutting-edge
                developments in your field.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="joinCommunity">
        <div className="container">
            <h3>Join Our Community of PhD Mentors </h3>
            <p>Becoming a mentor is a way to stay connected with academia, help shape future leaders, and ensure the continued progress of your field. At IIRHE, we connect experienced researchers with aspiring PhD students, creating a community of collaboration, support, and growth. </p>
            <p>Ready to make a lasting impact? <Link to="/mentor-onboarding-form"> Apply to become a mentor</Link> today and start guiding the next generation of researchers.</p>
        </div>
      </section>
    </>
  );
};

export default Why_mentor;
