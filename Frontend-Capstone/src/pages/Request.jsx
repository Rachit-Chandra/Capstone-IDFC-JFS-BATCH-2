import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import img from "../assets/images/requestMedi.jpg";

const theme = createTheme();

export default function Request() {


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
    name: "",
    email: "",
    phoneno: "",
    medicineName: "",
    description: "",
    fileLink: ""
  });
  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phoneno, medicineName, description, fileLink } = state;

    const request = {
      name,
      email,
      phoneno,
      medicineName,
      description,
      fileLink
    };
    axios
      .put("http://localhost:8082/request", request)
      .then((response) => {
        if (response.data.email == email) {
          console.log("Request Successfull");
          alert("Request of medicine " + response.data.medicineName+" Successfull");
          console.log(response.data);
          // sessionStorage.setItem("name",response.data.username)
          navigate("/Home");
        }
        else {
          console.log(request);
          console.log("Request failed")
          console.log(response.data);
          alert("Request Failed Try Again");
        }
      })
      .catch((err) => {
        console.log(request);
        console.error(err);
      });
  };

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
            // backgroundImage: 'url(https://png.pngtree.com/png-clipart/20220206/original/pngtree-world-health-day-concept-with-group-of-doctors-bring-medicine-and-png-image_7265157.png)',
            backgroundImage: 'url(' + img + ')',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid container item xs={12} sm={8} md={4} >
          <Box
            sx={{
              my: 3,
              mx: 6,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
              Request Medicine
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name "
                name="name"
                // autoComplete="email"
                onChange={handleInputChange}
                autoFocus
              />
              <TextField
                margin="normal"
                required
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
                name="phoneno"
                label="Mobile No"
                type="text"
                id="phoneno"
                onChange={handleInputChange}
              // autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="medicineName"
                label="Medicine Name"
                type="text"
                id="phoneno"
                onChange={handleInputChange}
              // autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="description"
                label="Description"
                type="text"
                id="description"
                onChange={handleInputChange}
              // autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="fileLink"
                label="Prescription link"
                type="text"
                id="fileLink"
                onChange={handleInputChange}
              // autoComplete="current-password"
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Request
              </Button>
              <Grid container>
                {/* <Grid item xs>
                  <Link to="/register">
                    Don't have an account? Create an account
                  </Link>
                </Grid> */}
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