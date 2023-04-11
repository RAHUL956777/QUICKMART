import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // from function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("api/v1/auth/login", {
        email,
        password,
      });
      if (res.data.success) {
        toast.success(res.data && res.data.message, {
          duration: 5000,
        });
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went rong");
    }
  };

  return (
    <Layout title={"Register - QuickMart"}>
      <div className="form-container">
        <h1 className="title">Welcome to Login Form</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="off"
            />
          </div>

          <button type="submit" className="btns">
            LOGIN
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
