import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <ToastContainer />
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Quickmart - Shope now",
  description: "mern stack project",
  keywords: `
  mern, 
  react,mongodb,node,express,e-commerce app,
  Online grocery shopping,
  Buy groceries online,
  Online grocery store,
  Grocery delivery,
  Grocery delivery service,
  Same-day delivery,
  Online supermarket,
  Fresh produce delivery,
  Organic groceries online,
  Affordable groceries online,
  Best deals on groceries online,
  Discounted groceries online,
  Online grocery deals,
  Quick and easy grocery shopping,
  Convenient online shopping,
  `,
  author: "Rahul",
};

export default Layout;
