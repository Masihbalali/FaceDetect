import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//icons
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import DeleteIcon from '@mui/icons-material/Delete';
import PasswordIcon from '@mui/icons-material/Password';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//popup
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FaceScanPopup from './FaceScanPopup';
import ButtonGroup from '@mui/material/ButtonGroup';
import "./App.css"

import { Outlet } from "react-router-dom";
import Popup from './Popup';



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
                  disabled={disable}
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
                <ButtonGroup
                    fullWidth
                    disableElevation
                    variant="contained"
                    aria-label="Disabled elevation buttons">
                    <Button
                    startIcon={<PasswordIcon />}
                    onClick={handleInput}
                    type="submit"
                    variant="contained"
                    sx={{ mt: 5, mb: 1 }}>
                    password
                    </Button>

                    <Button
                    startIcon={<SensorOccupiedIcon />}
                    onClick={handleClickOpen}
                    type="submit"
                    variant="contained"
                    sx={{ mt: 5, mb: 1 }}>
                    scan
                    </Button>
                    </ButtonGroup>
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
                <Link href="/signup" to="/signup" variant="body2">
                  Don't have an account? Sign up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>


    <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Scan your face</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Some content for this part we can gives to user!
            </DialogContentText>
            <div id="group-scan" className="popup-container">
                <video id="video" autoplay></video>
                <canvas id="canvas"></canvas>
                <div class="btn-container">
                    <button id="photo-button">start-camera</button>
                    <button id="take-photo">take</button>
                </div>
                <input type="text" class="popup-input" id="photo-input"/>
            </div>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
        </Dialog>
          
        

</>

  );
}