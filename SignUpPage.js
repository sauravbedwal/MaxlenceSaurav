import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Paper, Typography, Link, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(to right, #8e9eab, #eef2f3)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
    width: '20%', // Adjusted width for a narrower box
    borderRadius: '10px',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
    background: 'white',
  },
  input: {
    margin: theme.spacing(1, 0),
  },
  button: {
    margin: theme.spacing(2, 0),
  },
  header: {
    marginBottom: theme.spacing(3),
  },
}));

const SignUpPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleSignUp = (data) => {
    console.log('Signing up with:', data.email, data.password);
    navigate('/home');
  };

  return (
    <div className={classes.container}>
      <Paper elevation={3} className={classes.form}>
        <Typography variant="h4" className={classes.header}>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
            className={classes.input}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && (
            <Typography variant="caption" color="error">
              {errors.email.message}
            </Typography>
          )}
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
            className={classes.input}
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && (
            <Typography variant="caption" color="error">
              {errors.password.message}
            </Typography>
          )}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.button}
            type="submit"
          >
            Sign Up
          </Button>
        </form>
        <Typography variant="subtitle1">
          Already have an account? <Link href="/signin">Sign In</Link>
        </Typography>
        <Grid container justify="center">
          <Grid item>
            <Link href="/reset-password" variant="body2">
              Reset Password?
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default SignUpPage;
