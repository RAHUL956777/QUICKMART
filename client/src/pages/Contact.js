import React from "react";
import Layout from "../components/Layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="contact grid">
        {/* left grid */}
        <div className="leftgrid">
          welcome to leftgrid
          <div>
            <iframe
              to="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5598238244734!2d88.06110081475519!3d22.294657985326495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a028c46f7924ef9%3A0x117138803d4332!2z4Kau4Ka-4Kak4Ka-4Kaq4Ka-4Kah4Ka84Ka-IOCmrOCmvuCmuCDgprjgp43gpp_gp43gpq_gpr7gpqjgp43gpqE!5e0!3m2!1sbn!2sin!4v1680770916908!5m2!1sbn!2sin"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* right grid */}
        <div className="rightgrid">welcome to rightgrid</div>
      </div>
    </Layout>
  );
};

export default Contact;
