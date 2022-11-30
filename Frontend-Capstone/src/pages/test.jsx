import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/register.css";
import shoe1 from "../assets/images/checkout.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";



const Register = () => {
    let navigate = useNavigate();

    const [state, setState] = useState({
        email: "",
        username: "",
        phoneno: "",
        password: "",
    });
    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };


    const { email, username, phoneno, password } = state;

    const register = {
        email,
        username,
        phoneno,
        password,
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8084/signupCustomer", register)
            .then((response) => {
                console.log(response);
                if (response.data == '') {
                    alert("Email already exists");
                    console.log("Email already exists");
                }
                else {
                    alert("Signup successfull");
                    console.log("Signup successfull");
                    console.log(response.data);
                    navigate("/Login");
                }

            })
            .catch((err) => {
                console.log(register);
                console.error(err);
            });
    };

    const validate = () => {
        const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
        if ((email == "")  || (password == "") || (username == "") ||(phoneno == "")) {
            alert("Input all fields")
        }
        else if (password.length < 3) {
            alert("Password should contain more than 3 characters");
        }
        else if (!strongRegex.test(email)) {
            alert("Enter proper email");
        }
        else {
            handleSubmit()
        }
      }

    return (
        <Helmet title="Signup">
            {/* <section>
        <Container>
          <Row>
            <Col lg="12" md="12">
              <div className="hero__img">
                <img src={shoe1} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

            <section>
                <Container>
                    <Row>
                        <div className="test" >
                            <Col>
                                <form onSubmit={validate}>
                                    <br></br>

                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <div className="auth-wrapper" >
                                        <div className="auth-inner">
                                            <h3>Sign Up</h3>
                                            <div className="mb-3">
                                                <label>Email address</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="form-control"
                                                    placeholder="Your Email"
                                                    required
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            <div className="mb-3">

                                                <label>Full Name</label>
                                                <input
                                                    type="text"
                                                    name="username"
                                                    className="form-control"
                                                    placeholder="Your Full Name"
                                                    required
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            <div className="mb-3">

                                                <label>Phone Number</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="phoneno"
                                                    placeholder="Your Phone Number"
                                                    required
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label>Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    placeholder=" Your password"
                                                    name="password"
                                                    required
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="d-grid">
                                                <button type="submit" className="btn btn-primary">
                                                    Sign Up
                                                </button>
                                            </div>
                                            <p className="forgot-password text-right">
                                                <br>
                                                </br>
                                                <Link to="/login"><h6>Already registered!! Sign in?</h6></Link>
                                            </p>
                                            <br></br>

                                        </div>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>


                                </form>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Register;