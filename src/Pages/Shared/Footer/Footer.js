import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, background: '#2979ff' }}>
            <Container sx={{ mt: 5, py: 5, color: 'white' }}>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid item xs={12} md={3} sx={{ textAlign: 'start' }}>
                        <Typography variant="h3" sx={{ fontFamily: 'Trade Winds', color: 'white' }}>Car Shop</Typography>
                    </Grid>
                    <Grid item xs={12} md={3} sx={{ textAlign: 'start' }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>Quick Links</Typography>
                        <Typography variant="subtitle1">Home</Typography>
                        <Typography variant="subtitle1">Explore</Typography>
                        <Typography variant="subtitle1">Login</Typography>
                    </Grid>
                    <Grid item xs={12} md={3} sx={{ textAlign: 'start' }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>Social Media</Typography>
                        <Typography variant="subtitle1">Facebook</Typography>
                        <Typography variant="subtitle1">Instagram</Typography>
                        <Typography variant="subtitle1">Twitter</Typography>
                        <Typography variant="subtitle1">Youtube</Typography>
                        <Typography variant="subtitle1">Linked In</Typography>
                    </Grid>
                    <Grid item xs={12} md={3} sx={{ textAlign: 'start' }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>Contact Us</Typography>
                        <Typography variant="subtitle1">Gopalganj, Dhaka,</Typography>
                        <Typography variant="subtitle1">Bangladesh</Typography>
                        <Typography variant="subtitle1">+11 532 766 4545</Typography>
                        <Typography variant="subtitle1">info@carshop.com</Typography>
                    </Grid>
                </Grid>
                <Typography variant="subtitle1" sx={{ mt: 3, pt: 3 }}>Copyright &copy; 2022 Car Shop</Typography>
            </Container>
        </Box>
    );
};

export default Footer;