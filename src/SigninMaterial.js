import * as React from 'react';

//Material-UI Properties 
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ButtonGroup  from '@mui/material/ButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//mui icons
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';


//popup
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';




//CopyRight function for buttom of the form
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


//Main component
export default function SigninMaterial() {

    // popup 
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    // popup ended


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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
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
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Accept Privacy Terms."
                />
              </Grid>
            </Grid>

            
            <Button
            startIcon={<SensorOccupiedIcon />}
              onClick={handleClickOpen}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 5, mb: 1 }}>
              scan face
            </Button>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-start">
              <Grid item >
                <Link href="/" to="/" onCanPlay={(e)=> e.preventDefault()} variant="body2">
                  Already have an account? Login.
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>

    {/* popup */}
    <Dialog open={open} onClose={handleClose}>
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
        
        {/* 
          it could be use for sending data
          <TextField
              autoFocus
              margin="dense"
              id="name"
              label="text"
              type="text"
              fullWidth
              variant="standard"
          /> */}

          </DialogContent>
          <DialogActions>
          <Button onClick={handleClose}>Done</Button>
          </DialogActions>
      </Dialog>

</>

  );
}