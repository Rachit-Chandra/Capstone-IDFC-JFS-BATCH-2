import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import axios from "axios";

import "../styles/checkout.css";

const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [enterAddress, setEnterAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
      address: enterAddress,
      totalAmount: totalAmount
    };


    axios.post("http://localhost:8084/shippingDetails", userShippingAddress)
      .then((response) => {
        console.log(response);
        if (response.data == '') {
          alert("Email already exists");
          console.log("Email already exists");
        }
        else {
          alert("Order successfull");
          console.log("Order successfull");
          console.log(response.data);
          // navigate("/Login");
        }
       

      })
      .catch((err) => {
        console.log(userShippingAddress);
        console.error(err);
      });

    shippingInfo.push(userShippingAddress);
    console.log(userShippingAddress);
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col>
              <br></br>
              <div className="test" >
                <form onSubmit={handleSubmit}>
                  <br></br>

                  
                  <br></br>
                  <br></br>
                  <div className="auth-wrapper" >
                    <div className="auth-inner">

                      <h3>Shipping Address</h3>

                      <div className="mb-3">
                        <label>Your Name</label>
                        <div className="form__group">
                          <input
                            type="text"
                            placeholder="Enter your name"
                            className="form-control"
                            required
                            onChange={(e) => setEnterName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label>Email address</label>
                        <div className="form__group">
                          <input
                            type="email"
                            placeholder="Enter your email"
                            className="form-control"
                            required
                            onChange={(e) => setEnterEmail(e.target.value)}
                          />
                        </div>
                      </div>


                      <div className="mb-3">
                        <label>Phone Number</label>
                        <div className="form__group">
                          <input
                            type="number"
                            placeholder="Phone number"
                            className="form-control"
                            required
                            onChange={(e) => setEnterNumber(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label>Country</label>
                        <div className="form__group">
                          <input
                            type="text"
                            placeholder="Country"
                            className="form-control"
                            required
                            onChange={(e) => setEnterCountry(e.target.value)}
                          />
                        </div>
                      </div>



                      <div className="mb-3">
                        <label>City</label>
                        <div className="form__group">
                          <input
                            type="text"
                            placeholder="City"
                            className="form-control"
                            required
                            onChange={(e) => setEnterCity(e.target.value)}
                          />
                        </div>
                      </div>



                      <div className="mb-3">
                        <label>Postal Code</label>
                        <div className="form__group">
                          <input
                            type="number"
                            placeholder="Postal code"
                            className="form-control"
                            required
                            onChange={(e) => setPostalCode(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label>Address</label>
                        <div className="form__group">
                          <input
                            type="text"
                            placeholder="Delivery Address"
                            className="form-control"
                            required
                            onChange={(e) => setEnterAddress(e.target.value)}
                          />
                        </div>
                      </div>


                      <button type="submit" className="addTOCart__btn">
                        Payment
                      </button>
                    </div>
                  </div>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>

                </form>
              </div>
            </Col>



            <Col lg="4" md="6">
              <br></br>
              
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">

                  Subtotal: <span>Rs.{cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping: <span>Rs.{shippingCost}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>Rs.{totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;