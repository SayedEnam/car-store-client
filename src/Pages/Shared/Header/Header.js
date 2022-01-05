import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { Avatar } from '@mui/material';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} style={{ fontFamily: 'Trade Winds' }}>
                        Taarzan
                    </Typography>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/home">
                        <Button color="inherit" sx={{ fontWeight: 'bold' }}>Home</Button>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/explore">
                        <Button color="inherit" sx={{ fontWeight: 'bold' }}>Explore</Button>
                    </NavLink>
                    {
                        user?.email ?
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>
                                <Button onClick={logOut} color="inherit">Logout</Button>
                                <Avatar
                                    alt="Remy Sharp"
                                    src={user?.photoURL}
                                    sx={{ width: 45, height: 45 }}
                                />
                            </Box>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;