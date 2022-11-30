import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "reactstrap";
// import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import img from "../assets/images/doctor.jpg";
import axios from "axios";

import "../styles/checkout.css";
const theme = createTheme();

const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterAddress, setEnterAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  let cartItems = useSelector(() => (sessionStorage.getItem("cartItems")));
  let totalQuant = useSelector(() => (sessionStorage.getItem("totalQuantity")));
  // let productName = useSelector(() => (JSON.parse(sessionStorage.getItem("cartItems"))));
  // console.log(cartItems);
  // console.log(sessionStorage.getItem("cartItems"));
  // console.log(productName);


  const handleSubmit = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      address: enterAddress,
      postalCode: postalCode,
      productsBuyed: cartItems,
      totalAmount: totalAmount,
      totalQuantity: totalQuant

    };

    axios.post("http://localhost:8082/order", userShippingAddress)
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

  const myStyle={
    backgroundImage:'url('+ img+')',
            // height:'100vh',
            // marginTop:'-70px',
            // fontSize:'50px',
            backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat',
             backgroundPosition: 'center',
            //  opacity: '1',
            };

  return (
    <div style={myStyle} >
    <Helmet title="Checkout">

      <section>
      
        <Container>
          <Row>
            {/* OLD */}
            {/* <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Address</h6>
              <form className="checkout__form" onSubmit={handleSubmit}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </div>


                <div
                 className="form__group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    onChange={(e) => setEnterEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Phone number"
                    required
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Country"
                    required
                    onChange={(e) => setEnterCountry(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="City"
                    required
                    onChange={(e) => setEnterCity(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Postal code"
                    required
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Payment
                </button>
              </form>
            </Col> */}
            
            <Col lg="6" md="6">
              {/* <div className="checkout__bill">
              <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Product Quantity: <span>&#8377;{}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Product Quantity: <span>&#8377;{totalQuant}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>&#8377;{cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping: <span>&#8377;{shippingCost}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>&#8377;{totalAmount}</span>
                  </h5>
                </div>
              </div> */}
            </Col>


            {/* NEw */}
            <Col lg="6" md="6">
              <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs" square >
                  <CssBaseline />
                  <Box
                    sx={{
                      marginTop: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >

                    <Typography component="h1" variant="h5">
                      Shipping Details
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} >
                          <TextField
                            //   autoComplete="given-name"
                            name="name"
                            //   required
                            fullWidth
                            type="text"
                            id="name"
                            label="Name"
                            onChange={(e) => setEnterName(e.target.value)}
                          //   autoFocus
                          />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                          <TextField
                            //   required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            onChange={(e) => setEnterEmail(e.target.value)}
                          //   autoComplete="family-name"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            //   required
                            fullWidth
                            id="phone"
                            label="Phone No"
                            name="phone"
                            onChange={(e) => setEnterNumber(e.target.value)}
                          //   autoComplete="email"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            //   required
                            fullWidth
                            name="country"
                            label="Country"
                            // type="country"
                            id="country"
                            onChange={(e) => setEnterCountry(e.target.value)}
                          //  autoComplete=false;
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            //   required
                            fullWidth
                            type="text"
                            name="address"
                            label="Address"
                            id="address"
                            onChange={(e) => setEnterAddress(e.target.value)}
                          //  autoComplete=false;
                          />
                        </Grid>
                        {/* 
                        <Grid item xs={12}>
                          <TextField
                            //   required
                            fullWidth
                            type="text"
                            name="address"
                            label="Address"
                            id="address"
                            onChange={(e) => setEnterAddress(e.target.value)}
                          //  autoComplete=false;
                          />
                        </Grid> */}
                        <Grid item xs={12}>
                          <TextField
                            //   required
                            fullWidth
                            type="text"
                            name="postalCode"
                            label="PIN Code"
                            id="postalCode"
                            onChange={(e) => setPostalCode(e.target.value)}
                          //  autoComplete=false;
                          />
                        </Grid>
                        <Grid item xs={12}>
                          {/* <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                /> */}
                        </Grid>
                      </Grid>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Submit
                      </Button>
                      <Grid container justifyContent="flex-end">
                        <Grid item>
                          {/* <Link to="/login">
                Don't have an account? Create an account
              </Link> */}
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                  {/* <Copyright sx={{ mt: 5 }} /> */}
                </Container>
              </ThemeProvider>


              {/* TOtal Cart */}
            </Col>
          </Row>
        </Container>
       
      </section>
    </Helmet>
    </div>
  );
};

export default Checkout;
