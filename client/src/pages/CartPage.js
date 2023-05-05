import React from "react";
import Layout from "./../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cart, setCart] = useCart();
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center bg-light p-2 mb-1">
              {`Hello ${auth?.token && auth?.user?.name}`}
            </h1>
            <h4 className="text-center">
              {cart?.length > 1
                ? `You Have ${cart.length} items in your cart ${
                    auth?.token ? "" : "please login to checkout"
                  }`
                : "your Cart is Empty"}
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
            {cart?.map((p) => (
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top mb-3"
                    alt={p.name}
                    style={{ height: "220px" }}
                  />{" "}
                </div>
                <div className="col-md-8"> product name</div>
              </div>
            ))}
          </div>
          <div className="col-md-3">CHECKOUT | Payment</div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
