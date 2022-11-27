import React from 'react';
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
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Register() {
  
  const theme = createTheme();


    
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
            Register 
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            {/* first name */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="first_name"
              label="first name"
              name="first_name"
              autoFocus
            />
            {/* last name */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="last_name"
              label="last name"
              name="last_name"
              autoFocus
            />
            {/*enter password row*/}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="enter Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            {/*enter password row*/}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Re-enter Password"
              type="password"
              id="password"
              autoComplete="current-password"  
            />



            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container>
              <Grid  item>
                <Link href="/Login" variant="body2">
                  {"If you have account ? Login"}
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

export default Register;