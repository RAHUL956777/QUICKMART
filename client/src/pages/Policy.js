import React from "react";
import Layout from "../components/Layout/Layout";
import { BsFillChatLeftTextFill } from "react-icons/bs";

const Policy = () => {
  return (
    <Layout>
      <div className="wrapper flex_align_justify body">
        <div className="terms_service">
          <div className="tc_item tc_head flex_align_justify">
            <div className="icon flex_align_justify">
              <BsFillChatLeftTextFill />
            </div>
            <div className="text">
              <h2>TERMS OF SERVICE</h2>
              <p>Last updated on april 14 2023</p>
            </div>
          </div>
          <div className="tc_item tc_body">
            <p>
              We at QuickMart value your privacy and are committed to protecting
              your personal information. This privacy policy explains how we
              collect, use, and protect the personal information you provide us
              through our website.
            </p>
            <ol>
              <li>
                <h3>Collection of Personal Information</h3>
                <p>
                  When you create an account on our website, we collect personal
                  information such as your name, address, mobile number, and
                  email address. We may also collect other information such as
                  your IP address and browser type.
                </p>
              </li>
              <li>
                <h3> Use of Personal Information</h3>
                <p>
                  We use the personal information you provide us to: <br />
                  <br />
                  Provide and improve our services to you. Communicate with you
                  about your account and orders. Send you marketing
                  communications that we believe may be of interest to you.
                  Respond to your inquiries and requests. We may also use your
                  personal information to comply with legal obligations or to
                  protect our rights and interests.
                </p>
              </li>
              <li>
                <h3>Sharing of Personal Information</h3>
                <p>
                  We may share your personal information with third-party
                  service providers who help us operate our website and provide
                  our services to you. We require these service providers to
                  protect the confidentiality and security of your personal
                  information. <br />
                  <br />
                  We may also share your personal information with law
                  enforcement agencies or other third parties if we believe that
                  such disclosure is necessary to comply with applicable laws,
                  regulations, or legal processes.
                </p>
              </li>
              <li>
                <h3>Security of Personal Information</h3>
                <p>
                  We take reasonable measures to protect your personal
                  information from unauthorized access, use, or disclosure.
                  However, no security measure is completely foolproof, and we
                  cannot guarantee the security of your personal information.
                  Sure, here's an example of a privacy policy that you can use
                  as a reference when creating a web-based application that
                  collects personal information like name, address, password,
                  mobile number, and email:
                </p>
              </li>
              <li>
                <h3> Your Choices</h3>
                <p>
                  You can manage your communication preferences by updating your
                  account settings or by clicking the "Unsubscribe" link in our
                  marketing emails. You have the right to access, correct, or
                  delete your personal information. You can do this by
                  contacting us at gmail.comdasr16583@.
                </p>
              </li>
              <li>
                <h3>Changes to this Privacy Policy</h3>
                <p>
                  We may update this privacy policy from time to time. We will
                  notify you of any changes by posting the new privacy policy on
                  our website.
                </p>
              </li>
            </ol>
          </div>
          <div className="tc_item tc_foot flex_align">
            <button className="decline_btn">Decline</button>
            <button className="accept_btn">Accept</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
