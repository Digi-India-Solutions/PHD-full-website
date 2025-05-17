import React, { useEffect } from "react";
import admissionImage from "../../Images/admision.png";
import "./students.css";
import { Helmet } from "react-helmet";
const Student = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Student Admissions at IIRHE - PhD Mentorship and Guidance</title>
        <meta
          name="description"
          content="Start your PhD journey with IIRHE. Explore focus areas, book a consultation, and apply for mentorship to guide your academic success."
        />
        <meta
          name="keywords"
          content="PhD admissions, mentorship, research guidance, IIRHE, academic journey, apply for PhD, PhD consultation"
        />
        <meta name="author" content="IIRHE" />
      </Helmet>
      <div className="documentShadow mx-auto">
        <h3>Admissions at IIRHE</h3>
      </div>
      <section className="admission">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-10">
              <h3>Your Journey to a PhD Starts Here !</h3>
              <p>
                Whether you're just beginning your PhD or you're already deep
                into your research, IIRHE is here to guide you through every
                step of your academic journey.
              </p>
            </div>
            <div className="col-md-2">
              <img src={admissionImage} className="w-100" alt="" />
            </div>
            <div className="col-md-12">
              <p>
                For those just starting, we help you choose the right research
                focus and guide you through the application process. For current
                students, our experienced mentors provide ongoing support to
                keep you motivated and on track, offering guidance on research,
                documentation, and staying engaged throughout your PhD journey.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="apply_mentorship">
        <div className="container">
          <div className="documentShadow mx-auto">
            <h3>How to Apply for Mentorship</h3>
          </div>
          <div>
            <div className="row">
              <div className="col-md-6 mb-2">
                <div className="prospectiveDetails">
                  <h3>Prospective Students</h3>
                  <p>
                    <strong>Explore Your Focus Area:</strong> Use our platform
                    to discover the perfect program that aligns with your
                    research interests and career goals.
                  </p>
                  <p>
                    <strong>Book a Consultation:</strong> Book a free
                    consultation with an expert mentor who will help you define
                    your research topic, navigate the application process, and
                    set you on the path to success.
                  </p>
                  <p>
                    <strong>Submit Your Application:</strong> Once you've
                    decided on your focus area, submit your application. We'll
                    guide you every step of the way—from application to
                    admission.
                  </p>
                </div>
              </div>
              <div className="col-md-6 mb-2">
                <div className="prospectiveDetails">
                  <h3>Pursuing Students</h3>
                  <p>
                    <strong>Request a Mentor:</strong> If you’re already
                    pursuing a PhD and need expert guidance, apply to be paired
                    with a mentor. We’ll connect you with a subject matter
                    expert who can provide the support you need to stay on
                    track.
                  </p>
                  <p>
                    <strong>Ongoing Mentorship:</strong> Our mentors will help
                    you at any stage of your PhD—from refining your research
                    question to structuring your thesis documents.
                  </p>
                  <p>
                    <strong>Track Your Progress:</strong> Use our platform to
                    monitor your milestones, get feedback from your mentor, and
                    ensure you’re moving forward with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="documentShadow mx-auto">
                <h3>FAQ</h3>
              </div>
            </div>
            <div className="col-md-9">
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h3 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      What are the requirements to apply?
                    </button>
                  </h3>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <p>
                        <strong>For prospective students :</strong> A relevant
                        Master's degree or equivalent qualifications.
                      </p>
                      <p>
                        <strong>For pursuing students :</strong> Active
                        enrollment in a PhD program.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h3 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      How do I book a consultation or request a mentor?
                    </button>
                  </h3>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <p>
                        Simply fill out this Consultation form to request a
                        callback.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h3 class="accordion-header" id="flush-headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Is there a fee for mentorship?
                    </button>
                  </h3>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <p>
                        Fees may apply depending on the specific mentorship
                        program. Contact us for more details.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div
        className="BannerImage"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="container">
          <div className="MainBox">
            <div className="pagesHeading text-center">
              <h1 className="text-white">Students</h1>
              <h4>Empowering Your Academic Journey, Every Step of the Way.</h4>
            </div>
          </div>
        </div>
      </div>
      <section className="AllPageContent">
        <div className="container">
          <div className="text-center text-white">
            <h5 className="student-content">
              A PhD consulting platform offers students individualised guidance
              to help them select highly regarded, UGC-registered colleges that
              align with their academic goals. It provides application
              assistance, assistance with required documents such as SOPs and
              research proposals, and assistance in locating grant and funding
              opportunities. Additionally, the website pairs students with
              skilled mentors and assists them in selecting study ideas. Last
              but not least, ongoing mentoring and career counselling support
              students' success during and after their PhD studies.
            </h5>
            <h6 className="text-secondary">
              Your Journey Begins Here: Find the Right University and Program
              for You.
            </h6>
          </div>
          <div className="d-flex justify-content-between">
            <a href="/registration" className="registerBtn">
              Register Now
            </a>
            <a href="#" className="cancelBtn">
              Cancel
            </a>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Student;
