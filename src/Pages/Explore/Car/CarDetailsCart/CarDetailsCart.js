import { Alert, Button, Snackbar, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';

const CarDetailsCart = (props) => {
    const { price, picture, name } = props.car;
    const { user } = useAuth();
    const carData = { picture, name }
    const initialInfo = { displayName: user.displayName, email: user.email, status: 'pending' }
    const [order, setOrder] = useState(initialInfo);

    // snack bar
    const [open, setOpen] = React.useState(false);
    const [confirm, setConfirm] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    ///////////////

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrderData = { ...order };
        newOrderData["car"] = carData;
        newOrderData[field] = value;
        setOrder(newOrderData);
    }

    const handleCartSubmit = (e) => {
        fetch('https://intense-dawn-05513.herokuapp.com/allOrders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setConfirm(true);
                }
            })
        e.preventDefault();
    }
    return (
        <Box sx={{ border: '1px solid black', p: 2 }}>
            <Typography sx={{ fontWeight: 'bold', display: 'flex', justifyContent: 'center' }} variant="h4">Price: <Box sx={{ color: '#2979ff' }}> ${price}</Box></Typography>
            <Typography sx={{ fontWeight: 'bold', mt: 3 }} variant="h4">{user.displayName}</Typography>
            <Typography sx={{ fontWeight: 'bold' }} variant="h6">{user.email}</Typography>
            <form style={{ marginTop: "15px" }} onSubmit={handleCartSubmit}>
                <TextField
                    sx={{ width: '100%', mt: 1 }}
                    required
                    name="address"
                    label="Your Address"
                    variant="outlined"
                    onBlur={handleOnBlur} />
                <TextField
                    sx={{ width: '100%', mt: 1 }}
                    required
                    name="phone"
                    label="Your Phone Number"
                    type="number"
                    variant="outlined"
                    onBlur={handleOnBlur} />
                <Button
                    sx={{ width: '100%', mt: 1 }}
                    type="submit"
                    variant="contained"
                    onClick={handleClick}>
                    Place Order</Button>
            </form>
            {confirm && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    car added successfully
                </Alert>
            </Snackbar>}
        </Box >
    );
};

export default CarDetailsCart;