import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Box } from '@mui/system';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Explore = () => {
    
    const cars = useSelector((state) => state.carsReducer.cars);
    
    return (
        <>
            <Header></Header>
            <h1>Our beautiful cars</h1>
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        cars.map(car => {
                            const { _id, name, picture, shortDescription, rating, price } = car;
                            return (
                                <Grid key={_id} item xs={12} md={4}>
                                    <Card sx={{ maxWidth: 345, mx: 'auto', height: '100%', boxShadow: 3 }}>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={picture}
                                            alt={name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" sx={{ fontWeight: 'bold' }} component="div">
                                                {name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {shortDescription}
                                            </Typography>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
                                                <Typography sx={{ display: 'flex', alignItems: 'center' }} variant="h6">
                                                    <StarIcon sx={{ color: 'cadetBlue' }} /> Ratings: {rating}
                                                </Typography>
                                                <Typography variant="h5" sx={{ fontWeight: 'bolder', color: 'cadetblue' }}>$ {price}</Typography>
                                            </Box>
                                        </CardContent>
                                        <CardActions sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <NavLink to={`/carDetails/${_id}`}>
                                                <Button sx={{ px: 4, mb: 2 }} variant="contained">Buy Now</Button>
                                            </NavLink>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Explore;