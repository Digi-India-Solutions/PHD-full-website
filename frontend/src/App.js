import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Student from "./Pages/Student/Student";
import ProgramDetails from "./Pages/ProgramDetail/ProgramDetails";
import Registration from "./Pages/Registration/Registration";
import Login from "./Pages/Login/Login";
import Guides from "./Pages/Support_connection.jsx/Guides";
import About from "./Pages/About/About";
import Download from "./Pages/Downloads/Downloads";
import OurGuide from "./Pages/OurGuide/OurGuide";
import University from "./Pages/University/University";
import Whypursue from "./Pages/About/Whypursue";
import Why_mentor from "./Pages/ForMentor/Why_mentor";
import Discipline from "./Pages/Discipline/Discipline";
import CourseOverview from "./Pages/CourseOverview/CourseOverview";
import GuideRegistration from "./Pages/Forms/GuideRegistration";
import MentorOnboarding from "./Pages/Forms/MentorOnboarding";
import MentorshipRequest from "./Pages/Forms/MentorshipRequest";
import ContactUs from "./Pages/ContactUs/ContactUs";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/meet-iirhe" element={<About />} />
          <Route path="/discipline" element={<Discipline />} />
          <Route path="/about/why-pursue-phd" element={<Whypursue />} />
          <Route path="/courses/course-overview/:displine" element={<CourseOverview />} />
          <Route path="/students" element={<Student />} />
          <Route path="/for-mentor/why-become-mentor" element={<Why_mentor />} />
          <Route path="/programs-details" element={<ProgramDetails />} />
          <Route path="/resource-center" element={<Download />} />
          <Route path="/our-guide" element={<OurGuide />} />
          <Route path="/univercity" element={<University />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* support and connections */}
          <Route path="/guides" element={<Guides />} />
          {/* support and connections end */}
          {/* forms */}
          {/* <Route path="/phd-guide-registration-form" element={<GuideRegistration />} /> */}
          <Route path="/mentor-onboarding-form" element={<MentorOnboarding />} />
          <Route path="/mentorship-request-form" element={<MentorshipRequest />} />

          {/* forms end */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
