import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";


import "../styles/hero-section.css";

import { Link } from "react-router-dom";



import "../styles/home.css";

import featureImg01 from "../assets/images/delivery.jpg";
import featureImg02 from "../assets/images/return.png";
import featureImg03 from "../assets/images/bag.png";

import whyImg from "../assets/images/medicine.png";
import heroImg from "../assets/images/delivery.jpg";
import networkImg from "../assets/images/test.png";

// import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "The Delivery is safe and faster as compared to other websites",
  },

  {
    title: "Easy Return",
    imgUrl: featureImg02,
    desc: "Medicines are easily retunable and replaceable",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Fastest Delivery at your Door Steps and Cover Pan India"
  },
];

const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>Medicines?</span> Just wait <br /> medicines at
                  <span> your door</span>
                </h1>

                <p>
                Quick Medi brings to you an online platform, which can be accessed for all your health needs.
                 We are trying to make healthcare a hassle-free experience for you. Get your allopathic, ayurvedic
                 , homeopathic medicines, vitamins & nutrition supplements and other health-related products delivered at home.
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                  <Link to="/foods"> Order now </Link><i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/medicines">Medicines</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
                {/* <img imgUrl='https://img.freepik.com/premium-vector/delivery-man-protective-mask-delivers-medicine-by-motorbike_208509-465.jpg?w=740'></img> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                We Deliver Genuine Medicine At Your Door Step in Minimum Cost within few hours.
              </p>
              <p className="feature__text">
                The Most Geninue and vast variety of medicines  {" "}
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>



      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Quick Medi?</span>
                </h2>
                <p className="tasty__treat-desc">
                Quick Medi brings to you an online platform, which can be accessed for all your health needs.
                 We are trying to make healthcare a hassle-free experience for you. Get your allopathic, ayurvedic
                 , homeopathic medicines, vitamins & nutrition supplements and other health-related products delivered at home.
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> 100% Genuine Medicine
                    </p>
                    <p className="choose__us-desc">
                      Quick Medi Deliver Genuine Medicines
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Quality support
                    </p>
                    <p className="choose__us-desc">
                      24/7 Customer Support Available
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>Order from any
                      location{" "}
                    </p>
                    <p className="choose__us-desc">
                      We Deliver the Medicine all over India
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                Quick Medi brings to you an online platform, which can be accessed for all your health needs.
                 We are trying to make healthcare a hassle-free experience for you. Get your allopathic, ayurvedic
                 , homeopathic medicines, vitamins & nutrition supplements and other health-related products delivered at home.
                </p>
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
