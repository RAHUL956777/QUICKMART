import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <Layout>
      <h2 className="h2">Welcome to Contact Us Page</h2>
      <div className="main-div">
        <div className="left">
          {/* <h2>Location Details </h2> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.6794453391485!2d88.06110081475519!3d22.294657985326495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a028c46f7924ef9%3A0x117138803d4332!2sMatapara%20Bus%20Stand!5e1!3m2!1sen!2sin!4v1680943263600!5m2!1sen!2sin"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="right">
          <p>Contact Details</p>
          <h1>
            We are avaliable 24x7 | If you are Facing any kind of Issu or
            problem in Payment Contact Us Bellow The contact Details
          </h1>
          <h2>Name: Rahul Das</h2>
          <h3>
            <BiMailSend className="icon" /> : dasr16583@gmail.com
          </h3>
          <h3>
            <BiPhoneCall className="icon" /> : 6297587513
          </h3>
          <h3>
            <FaGithub className="icon" /> : https://github.com/RAHUL956777
          </h3>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
// "https://github.com/RAHUL956777
