import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <h2 className="h2">About Us</h2>
      <div className="about-div">
        <div className="about-left">
          <img src="images/about.avif" alt="contact-img" />
        </div>
        <div className="about-right">
          <p>
            Welcome to our e-commerce web application, where shopping is just a
            few clicks away! Our platform offers a seamless online shopping
            experience, providing you with a wide range of products and services
            from the comfort of your own home. Our user-friendly interface makes
            it easy for you to browse our extensive catalog of products, which
            includes everything from clothing and accessories to electronics and
            home goods. With detailed product descriptions, multiple images, and
            customer reviews, you can make informed purchasing decisions that
            meet your needs and budget. Our checkout process is quick and
            secure, ensuring that your personal and financial information is
            protected every step of the way. We accept a variety of payment
            methods, including credit cards, debit cards, and PayPal, to make
            your shopping experience as convenient as possible. And if you ever
            need assistance, our friendly customer service team is available to
            help you with any questions or concerns you may have. So why wait?
            Start shopping now and experience the convenience of our e-commerce
            web application today!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
