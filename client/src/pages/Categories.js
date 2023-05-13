import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";

const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row container">
          <h2 className="text-center">All Categories</h2>
          {categories.map((c) => (
            <div className="col-md-4 mt-5 mb-3 gx-2 gy-2" key={c._id}>
              <div className="card">
                <Link
                  to={`/category/${c.slug}`}
                  className="btn cat-btn hov"
                  style={{
                    padding: "22px",
                    fontSize: "20px",
                    fontWeight: "40px",
                  }}
                >
                  {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
