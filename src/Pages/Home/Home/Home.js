import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Questions from '../Questions/Questions';
import Reviews from '../Reviews/Reviews';
import TopCars from '../TopCars/TopCars';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Box
                className="banner"
                sx={{
                    height: '85vh',
                    background: `url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'white', mb: 3, fontFamily: 'verdana' }}>Find Out Your Favourite Cars</Typography>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white', fontFamily: 'verdana' }}>Make your life beautiful</Typography>
                <Button variant="contained" sx={{ px: 3, mt: 3 }}>Explore</Button>
            </Box>
            <TopCars></TopCars>
            <Questions></Questions>
            <Reviews></Reviews>
            <Footer></Footer>
        </>
    );
};

export default Home;