import React, { useEffect } from "react";
import aboutImage from "../../Images/about_image.png";
import what1 from "../../Images/what1.png";
import what2 from "../../Images/what2.png";
import what3 from "../../Images/what3.png";
import mission1 from "../../Images/mission.png";
import mission2 from "../../Images/mission2.png";
import "./about.css";
import ConsultantForm from "../../Component/ConsultantForm/ConsultantForm";
import { Helmet } from "react-helmet";
const About = () => {
  useEffect(() => {
    window.scrollBy({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
      <Helmet>
        <title>About Us | IIRHE - Academic Mentorship & PhD Support</title>
        <meta
          name="description"
          content="Learn about IIRHE, your trusted partner for PhD mentorship, research guidance, and academic success. We provide 360-degree support for researchers, mentors, and universities."
        />
        <meta
          name="keywords"
          content="IIRHE, PhD mentorship, research guidance, academic support, PhD success, research mentors, university accreditation, academic excellence"
        />
      </Helmet>
      <section className="about_section">
        <div className="documentShadow mx-auto">
          <h3>Meet IIRHE</h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <p>Welcome to IIRHE, your partner in Academic Success!</p>
              <div className="documentShadow">
                <h3>Who We Are?</h3>
              </div>
              <p>
                The journey to earning a PhD is anything but ordinary. It’s
                filled with curiosity, hard work, and at times, overwhelming
                challenges. That’s where we come in.
              </p>
            </div>
            <div className="col-md-4">
              <div>
                <img className="w-100" src={aboutImage} alt="" />
              </div>
            </div>
            <div className="col-md-12">
              <p>
                At IIRHE, we are on a mission to revolutionize the PhD
                experience. We provide 360-degree support to PhD students and
                aspire researchers at every stage of their academic journey. We
                bring together a community of experienced mentors and subject
                experts who genuinely care about your success. They’re here not
                just to give advice but to inspire you, keep you on track, and
                make sure your passion for research never wavers.
              </p>
            </div>
          </div>
        </div>

        {/* ****************what we do****************  */}
        <div className="what_we_do">
          <div className="container">
            <div className="documentShadow">
              <h3>What We Do ?</h3>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="aboutCardSection">
                  <div className="d-flex justify-content-center">
                    <img src={what1} alt="" />
                  </div>
                  <h4>For Mentors</h4>
                  <p>
                    We offer a rewarding opportunity for mentors to make a
                    lasting impact. By guiding PhD students through crucial
                    stages—like choosing research topics and organizing
                    documentation—you’ll not only help shape the next generation
                    of researchers but also enrich your own academic and
                    professional journey.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="aboutCardSection">
                  <div className="d-flex justify-content-center">
                    <img src={what2} alt="" />
                  </div>
                  <h4>For PhD Guides</h4>
                  <p>
                    We partner with universities to strengthen their research
                    departments. By connecting them with seasoned PhD guides, we
                    help institutions achieve academic excellence and enhance
                    their research reputation, with the added benefit of aiding
                    in accreditation efforts.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="aboutCardSection">
                  <div className="d-flex justify-content-center">
                    <img src={what3} alt="" />
                  </div>
                  <h4>Students</h4>
                  <p>
                    We know that the PhD path can feel overwhelming, but we’re
                    here to make it clearer and more manageable. From helping
                    you identify a research focus that truly excites you to
                    offering structured guidance for your documentation, we
                    ensure you have the support you need to thrive and enjoy the
                    journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="whatwedo_color"></div>
        </div>
        {/* ****************what we do end****************  */}

        {/* ****************mission**************** */}
        <div className="mission">
          <div className="container">
            <div>
              <div className="documentShadow">
                <h3>Mission</h3>
              </div>
              <div className="row d-flex align-items-center">
                <div className="col-md-10 col-8">
                  <p>
                    To transform the PhD experience by providing 360-degree
                    support that empowers both prospective and current research
                    students. Through personalized mentorship, expert guidance,
                    and motivational resources, we strive to ensure that every
                    PhD scholar feels confident, inspired, and equipped to
                    achieve academic excellence.
                  </p>
                </div>
                <div className="col-md-2 col-4">
                  <img className="w-100" src={mission1} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-end mt-3">
                <div className="documentShadow my-0">
                  <h3>Vision</h3>
                </div>
              </div>
              <div className="row d-flex align-items-center">
                <div className="col-md-2 col-4">
                  <img className="w-100" src={mission2} alt="" />
                </div>
                <div className="col-md-10 col-8">
                  <p>
                    To be a global leader in academic mentorship, fostering a
                    vibrant community of researchers who advance knowledge and
                    innovation. We aim to revolutionize academic guidance,
                    partnering with universities and mentors to create a world
                    where PhD students can thrive without feeling lost or
                    unsupported.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ****************mission end**************** */}
      </section>
      <section className="consultant">
        <ConsultantForm />
      </section>
    </>
  );
};

export default About;
