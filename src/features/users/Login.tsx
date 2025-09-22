import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { selectLoginError, selectLoginLoading } from './usersSlice.ts';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { type ChangeEvent, type FormEvent, useState } from 'react';
import type { LoginMutation } from '../../types';
import { login } from './usersThunk.ts';
import { Alert, Avatar, Box, Button, Link, Stack, TextField, Typography } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const Login = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoginLoading);
  const error = useAppSelector(selectLoginError);
  const navigate = useNavigate();

  const [state, setState] = useState<LoginMutation>({
    username: '',
    password: '',
  });

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitFormHandler = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await dispatch(login(state)).unwrap();
      navigate('/');
    } catch (e) {
      // error happened
    }
  };

  return (
    <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOpenIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      {error && (
        <Alert severity={'error'} sx={{ mt: 3 }}>
          {error.error}
        </Alert>
      )}
      <Box component="form" noValidate onSubmit={submitFormHandler} sx={{ my: 3, maxWidth: '400px', width: '100%' }}>
        <Stack spacing={2}>
          <TextField
            required
            label="Username"
            name="username"
            value={state.username}
            onChange={inputChangeHandler}
            autoComplete="current-username"
          />
          <TextField
            type="password"
            required
            label="Password"
            name="password"
            value={state.password}
            onChange={inputChangeHandler}
            autoComplete="current-password"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mb: 2 }} loading={loading}>
            Sign In
          </Button>
        </Stack>
      </Box>
      <Link component={RouterLink} to="/register">
        Dont have an account yet? Register
      </Link>
    </Box>
  );
};

export default Login;
