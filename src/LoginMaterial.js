import * as React from 'react';
import { useState } from "react";


import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

//icons
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//popup
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import ButtonGroup from '@mui/material/ButtonGroup';
import "./App.css"




function Copyright(props) {
  return (
    <Typography variant="body2" fontSize={12} color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://eskanogroup.ir/">
        Eskano Group 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function LoginMaterial(props) {

    const [pwd_visibility, Setpwd_display] = React.useState("hidden")

    // popup 
    const [open, setOpen] = React.useState(false);
    const [disable, setDisable] = React.useState(true)

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    // popup ended

    const handleInput = (event) =>{
        event.preventDefault();
        const pwd_input = document.getElementById("password");
        setDisable((prevstate)=> !prevstate)

    }

    const handleVisibility = (event) =>{
      event.preventDefault();
      Setpwd_display("visible")
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };





  return (
<>

    <ThemeProvider theme={theme}>
      <Container component="main" className="main-container" maxWidth="xs" sx={{mt:"10%"}}>
        <CssBaseline />
        <Box item xs={8} s={12}
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 0, bgcolor: 'transparent', height:70, width:70 }}>
            {/* <SensorOccupiedIcon  sx={{ width: 25, height: 25}}/> */}
            <img src="https://img.icons8.com/ios/50/null/face-id--v2.png"/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Login to your account
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="UserName"
                  name="username"
                  autoComplete="username"
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
                  autoComplete="new-password"
                  className='pwd-input'
                  sx={{visibility:pwd_visibility}}
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
            <Button
                    startIcon={<SensorOccupiedIcon />}
                    onClick={handleClickOpen}
                    fullWidth
                    type="submit"
                    variant="contained"
                    sx={{ mt: 5, mb: 1 }}>
                    scan
                    </Button>
            </Grid>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}>
              Login
            </Button>
            <Grid container justifyContent="flex-start">
              <Grid item >
                <Link href='#' onClick={handleVisibility} variant="body2">
                  Use Password insted.
                </Link>
              </Grid>
            </Grid>
            <Grid container justifyContent="flex-start">
              <Grid item >
                <Link href="/signup" onCanPlay={(e)=> e.preventDefault()} variant="body2">
                  Don't have an account? Sign up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>


      {/* popup */}
      <Dialog open={open} onClose={handleClose} className={"margin-container"}>
          <DialogTitle>Scan your face</DialogTitle>
          <DialogContent>
          <DialogContentText>
              To subscribe to this website, please enter your email address here.
          </DialogContentText>
          <div id="group-scan" className="popup-container">
              <video id="video" autoplay></video>
              <canvas id="canvas"></canvas>
              <div className={"btn-container"}>
              <Grid item xs={12}>
                <ButtonGroup
                    fullWidth
                    disableElevation
                    variant="contained"
                    aria-label="Disabled elevation buttons">
                    <Button

                    type="submit"
                    variant="contained"
                    sx={{ mt: 5, mb: 1 }}>
                      Start camera
                    </Button>

                    <Button

                    type="submit"
                    variant="contained"
                    sx={{ mt: 5, mb: 1 }}>
                    Take
                    </Button>
                    </ButtonGroup>
            </Grid>

              </div>
              <input type="text" className={"popup-input"} id="photo-input"/>
          </div>

          </DialogContent>
          <DialogActions>
          <Button onClick={handleClose}>Done</Button>
          </DialogActions>
      </Dialog>
          
        

</>

  );
}