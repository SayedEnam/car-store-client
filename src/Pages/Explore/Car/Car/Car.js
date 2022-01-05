import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import CarDetails from '../CarDetails/CarDetails';
import CarDetailsCart from '../CarDetailsCart/CarDetailsCart';

const Car = () => {

    const { carID } = useParams();

    const cars = useSelector((state) => state.carsReducer.cars);

    const car = cars.filter(car => car._id === carID);

    return (
        <>
            <Header></Header>
            <Box
                className="banner"
                sx={{
                    height: '85vh',
                    background: `url("${car[0].picture}")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%'
                }}></Box>
            <Container sx={{ flexGrow: 1, mx: 'auto', mt: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <CarDetails car={car[0]}></CarDetails>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <CarDetailsCart car={car[0]}></CarDetailsCart>
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Car;