import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import  {toast}  from 'react-toastify';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import img from "../assets/images/loginimage.png";

const theme = createTheme();

export default function Login() {


//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

let navigate = useNavigate();

const [state, setState] = useState({
  email: "",
  password: "",
});
const handleInputChange = (e) => {
  setState({
    ...state,
    [e.target.name]: e.target.value,
  });
};
const { email, password } = state;

  const login = {
    email,
    password,
  };

const handleSubmit = (e) => {
  e.preventDefault();
  
  axios.get("http://localhost:8082/login/"+email)
    .then((response) => {
        if(response.data.email == email && response.data.password == password){
          console.log("Login");
          //  toast.success("Welcome "+response.data.firstname);
          alert("Welcome "+response.data.firstname);
          console.log(response.data);
          sessionStorage.setItem("name",response.data.firstname)

             navigate("/Home");  
        }
        else{
          console.log(login);
          console.log("Login failed")
          console.log(response.data);
          // toast.error("wrong Id PASS");
         alert("wrong Id PASS");
        }

    })
    .catch((err) => {
      console.log(login);
      console.error(err);
    });
  };

  const validate = () => {
    const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
    if ((email == "")  || (password == "")) {
        alert("Input all fields")
    }
    else if (password.length < 3) {
        alert("Password should contain more than 8 characters");
    }
    else if (!strongRegex.test(email)) {
        alert("Enter proper email");
    }
    else {
        handleSubmit()
    }
}
  


  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={8}
          sx={{
            // backgroundImage : `url(${"../assets/images/loginimage.png"})`
            // ,
            backgroundImage: 'url('+ img+')',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid container item xs={12} sm={8} md={4} component={Paper} elevation={1} square >
          <Box
            sx={{
              my: 12,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                 required
                 type="email"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                // autoComplete="email"
                onChange={handleInputChange}
                autoFocus
              />
               
              <TextField
                margin="normal"
                 required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handleInputChange}
                // autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                <Link to="/register">
                Don't have an account? Create an account
              </Link>
                </Grid>
                <Grid item>

                  {/* <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link> */}

                </Grid>
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
                }

