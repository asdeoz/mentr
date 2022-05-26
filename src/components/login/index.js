import { useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContextState } from '../../context';

const Login = ({ availableUsers }) => {
  const router = useRouter();
  const [loginError, setLoginError] = useState('');
  const { state, dispatches: { login } } = useContextState();

  const handleSubmit = event => {
    event.preventDefault();
    setLoginError('');
    const data = new FormData(event.currentTarget);
    const credentials = {
      email: data.get('email'),
      password: data.get('password'),
    };

    const foundUser = availableUsers.find(user => user.email === credentials.email);

    if (foundUser) {
      login(foundUser);
      router.push('/dashboard');
    } else {
      setLoginError('The username or password you entered is incorrect.');
    }
  };

  return (
    <Box sx={{
      my: 8,
      mx: 4,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Image src="/images/mentr_logo.png" width="100" height="100" alt="Mentr" />
      <Typography component="h1" variant="h5">Login</Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            type="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            autoComplete="current-password"
            autoFocus
            type="password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember Me"
          />
          {loginError && (
            <Typography sx={{ color: 'red' }}>{loginError}</Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >Log In</Button>
      </Box>
  </Box>
  );
}

export default Login;
