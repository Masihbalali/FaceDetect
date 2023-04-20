import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

//popup
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FaceScanPopup from './FaceScanPopup';




// const video = document.getElementById('video');
// const canvas = document.getElementById('canvas');
// const photoButton = document.getElementById('photo-button');
// const photoInput = document.getElementById('photo-input');
// const takePhoto = document.getElementById('take-photo')
// photoButton.addEventListener('click', () => {
//   navigator.mediaDevices.getUserMedia({ video: true })
//     .then(stream => {
//       video.srcObject = stream;
//     })
//     .catch(error => {
//       console.error(error);
//     });
//   });
//   takePhoto.addEventListener('click',()=>{
//     const context = canvas.getContext('2d');
//     context.drawImage(video, 0, 0, canvas.width, canvas.height);
//     const photoUrl = canvas.toDataURL();
//     photoInput.value = photoUrl;
//   });



  export default function Popup(props){
    // popup 
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    // popup ended

    return(
      <>
      <Button
      onClick={handleClickOpen}
      fullWidth
      type="submit"
      variant="contained"
      sx={{ mt: 5, mb: 1 }}>
      scan
      </Button>
      <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Scan your face</DialogTitle>
          <DialogContent>
          <DialogContentText>
              To subscribe to this website, please enter your email address here. We
              will send updates occasionally.
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

    )
  }