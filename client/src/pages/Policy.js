import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <h2 className="h2">Our Privacy Policys</h2>
      <div className="policy-div">
        <p className="p">
          Company B's Privacy Policy Statement: Company B respects the privacy
          of our users and takes the responsibility of protecting personal
          information seriously. We collect personal information for the purpose
          of improving our services, communicating with users, and processing
          orders. We may share personal information with third-party service
          providers who assist us with fulfilling orders and delivering
          products. We take measures to ensure that personal information is
          safeguarded against unauthorized access, use, disclosure, and
          destruction.
        </p>
        <p className="p">
          Company C's Privacy Policy Statement: At Company C, we understand the
          importance of protecting personal information and are committed to
          maintaining the privacy of our users. We collect personal information
          to fulfill orders, provide customer service, and improve our services.
          We may share personal information with third parties who provide
          services on our behalf, but only for the purpose of delivering
          products and improving our services. We use reasonable security
          measures to protect personal information from unauthorized access,
          disclosure, alteration, and destruction. We do not sell personal
          information to third parties.
        </p>
      </div>
    </Layout>
  );
};

export default Policy;
