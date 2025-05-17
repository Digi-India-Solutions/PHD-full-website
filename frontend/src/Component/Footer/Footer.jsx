import React, { useState } from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const Footer = () => {
  const [data, setData] = useState({
    phoneNumber: "",
    message: ""
  })

  const getInputdata = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const postData = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("https://api.iirhe.org/api/send-reachus", data)
      if (res.status === 201) {
        toast.success("Inquery Send Successfully")
        setData({
          phoneNumber: "",
          message: ""
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5 className="text-white">Our Company</h5>
              <ul className="footerUl">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Products and Services</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
                <li>
                  <a href="#">Download</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <h5 className="text-white">Reach Us</h5>
              <p className="text-white">Indian Institute of Research</p>
              <div className="row mt-3">
                <div className="col-md-12 mb-3 col-6">
                  <p className="mb-0 text-white">Contact Us</p>
                  <button className="btn-custom-light">
                    <a class="text-decoration-none" href="tel:+918860247763">+91 886-024-7763</a>
                  </button>
                </div>
                <div className="col-md-12 col-6">
                  <p className="mb-0 text-white">Mail Us</p>
                  <button className="btn-custom">
                    <a className="text-white text-decoration-none" href="mailto:info@iirhe.org">info@iirhe.org</a></button>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="footer_form">
                <h5>Leave a message, We Will Call You Back</h5>
                <form onSubmit={postData}>
                  <div className="form-group spacingBottom">
                    <label>Mobile No.</label>
                    <input
                      type="Number"
                      name="phoneNumber"
                      onChange={getInputdata}
                      value={data.phoneNumber}
                      className="form-control mb-2"
                      placeholder="+91 Enter Your Mobile"
                    />
                  </div>
                  <p className="spacingBottom mb-2">Your Country is India</p>
                  <div className="form-group">
                    <label>Requirement Details</label>
                    <textarea
                      className="form-control"
                      name="message"
                      onChange={getInputdata}
                      value={data.message}
                      rows="3"
                      placeholder="Additional Details About Your Requirement..."
                    ></textarea>
                  </div>
                  <div className="text-center spacingTop">
                    <button type="submit" className="submit-btn">
                      Submit Requirement
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>


        </div>
      </footer>
    </>
  );
};

export default Footer;
