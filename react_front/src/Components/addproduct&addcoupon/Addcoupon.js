import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Addcoupon() {
  
  const theme = createTheme();
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div>
<ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add coupon 
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            {/* coupon id */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="coupon_id"
              label="Coupon id"
              name="Product_id"
              autoFocus
            />
            {/* Product name */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="Event_name"
              label="Event name"
              name="Event_name"
              autoFocus
            />
            {/*enter Description row*/}
            <TextField
              margin="normal"
              required
              fullWidth
              name="Starting date"
              label="Start date"
              type="date"
              id="date"
            />
             <TextField
              margin="normal"
              required
              fullWidth
              name="expire date"
              label="expire date"
              type="date"
              id="expire_image"
            />
        {/* <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      /> */}


            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add coupon
            </Button>
            <Grid container>
              <Grid  item>
                <Link href="/Admin" variant="body2">
                  {"back to Admin ? Click here"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
    
  );
}

export default Addcoupon;