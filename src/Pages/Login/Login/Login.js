import { Alert, Button, CircularProgress, Container, Grid, Snackbar, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, authError, isLoading } = useAuth();

    // snack bar
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    // redirects
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>Login</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            onBlur={handleOnBlur}
                            id="standard-basic"
                            name="email"
                            type="email"
                            label="Your Email"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            onBlur={handleOnBlur}
                            id="standard-basic"
                            name="password"
                            type="password"
                            label="Your Password"
                            variant="standard" />
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/signup">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                        <Button onClick={handleClick} sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Logged in successfully!</Alert>}

                    {authError && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                            {authError}
                        </Alert>
                    </Snackbar>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src="https://image.freepik.com/free-vector/sign-concept-illustration_114360-5425.jpg" alt="" />
                </Grid>
            </Grid>
        </Container >
    );
};

export default Login;