import * as React from 'react';
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
import  { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";
import img from "../assets/images/dawa.jpg";
// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function Register() {

let navigate = useNavigate();

const [state, setState] = useState({
    email: "",
    firstname:"",
    lastname:"",
    phoneno:"",
    password: "",
  });
  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email,firstname,lastname,phoneno, password } = state;

    const register = {
      email,
      firstname,
      lastname,
      phoneno,
      password,
    };

    axios.post("http://localhost:8082/signup",register)
      .then((response) => {
        console.log(response);
        if(response.data == ''){
          alert("Email already exists");
          console.log("Email already exists");
        }
        else{
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
  
  // const validate = () => {
  //   const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
  //   if ((email == "")  || (password == "")) {
  //       alert("Input all fields")
  //   }
  //   else if (password.length < 3) {
  //       alert("Password should contain more than 8 characters");
  //   }
  //   else if (!strongRegex.test(email)) {
  //       alert("Enter proper email");
  //   }
  //   else {
  //       handleSubmit()
  //   }
  // }


  return (
  
    <div style={myStyle} >

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs"  elevation={1} square>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2} >
              <Grid item xs={12} sm={6} >
                <TextField
                //   autoComplete="given-name"
                   required
                  fullWidth
                  // type="text"
                  id="firstname"
                  name="firstname"
                  label="First Name"
                  onChange={handleInputChange}
                //   autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                   required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastname"
                  onChange={handleInputChange}
                //   autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                   required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={handleInputChange}
                //   autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                   required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={handleInputChange}
                //  autoComplete=false;
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                   required
                  fullWidth
                  type="text"
                  name="phoneno"
                  label="Phone No"
                  id="phoneno"
                  onChange={handleInputChange}
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
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              <Link to="/login">
                Don't have an account? Create an account
              </Link>
                {/* <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
    </div>
  );
}