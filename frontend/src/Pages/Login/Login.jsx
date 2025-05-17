import React, { useEffect } from "react";
import supportImg1 from "../../Images/support1.png";
import supportImg2 from "../../Images/support2.png";
import supportImg3 from "../../Images/support3.png";
import supportImg4 from "../../Images/support4.png";
import FocusAreaSlider from "../../Component/FocusAreaSlider/FocusAreaSlider";
import HowSupport from "../HowSupport/HowSupport";
import { Link } from "react-router-dom";
const Login = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
      <div>
        <div className="row">
          <div className="col-md-7">
            <div className="all_banner">
              <div className="overlay">
                <div className="container-fluid">
                  <div className="heroContent">
                    <h1>Indian Institute of Research</h1>
                    <p>
                      The Indian Institute of Research (IIR) web is your
                      centralised hub for navigating the world of higher
                      education. Our mission is to foster meaningful connections
                      between universities, students, mentors, and guides,
                      empowering you to achieve your academic goals.
                    </p>
                    <input
                      type="text"
                      placeholder="Search...."
                      className="form-control w-50"
                      name=""
                      id=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="registrationBox">
              <h2>Enter Your Details</h2>
              <form action="">
                <div>
                  <input
                    className="form-control"
                    placeholder="User ID"
                    type="text"
                    name="userId"
                    id=""
                  />
                </div>
                <div>
                  <input
                    className="form-control"
                    placeholder="Password"
                    type="password"
                    name="password"
                    id=""
                  />
                </div>
                <div>
                  <Link className="text-danger" to={"/"}>
                    Forgot Password
                  </Link>
                </div>

                <div>
                  <button className="btn-custom mt-3">Submit</button>
                </div>
              </form>

              <div className="mt-3">
                <p>Didn’t register yet?</p>
                <a href="/registration" className="cancelBtn">Register Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="container supportRegistration">
        <div className="row align-items-center">
          <div className="col-md-4 spacingBottom">
            <h2 className="text-white fs-1">Support and Connection</h2>
          </div>
          <div className="col-md-2 col-6 spacingBottom">
            <div className="supportCard">
              <img src={supportImg1} className="supportImg" alt="" />
              <h5>University</h5>
            </div>
          </div>
          <div className="col-md-2 col-6 spacingBottom">
            <div className="supportCard">
              <img src={supportImg2} className="supportImg" alt="" />
              <h5>Students</h5>
            </div>
          </div>
          <div className="col-md-2 col-6 spacingBottom">
            <div className="supportCard">
              <img src={supportImg3} className="supportImg" alt="" />
              <h5>Guides</h5>
            </div>
          </div>
          <div className="col-md-2 col-6 spacingBottom">
            <div className="supportCard">
              <img src={supportImg4} className="supportImg" alt="" />
              <h5>Mentors</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="Homeabout">
        <div className="container">
          <div>
            <h2>
              <b>About Us</b>
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

            <h2>Why us?</h2>
            <p className="spacingBottom">
              We provide meaningful connections between universities, students,
              mentors, and guides, empowering you to achieve your academic
              goals. Our site, consisting of top NAAC accredited and UGC
              approved authorities in their disciplines who are dedicated to
              mentoring students, serves as what makes our PhD program unique.
              We provide broad opportunities for cross-disciplinary study,
              encouraging interdisciplinary cooperation that advances scholarly
              investigation. Our innovative resources and facilities also give
              students the resources they need for conducting
              innovative studies.
            </p>
          </div>
        </div>
      </section>

      <FocusAreaSlider />
      <HowSupport />
    </>
  );
};

export default Login;
