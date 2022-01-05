import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [adminData, setAdminData] = useState({});
    const { user } = useAuth();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newAdminData = { ...adminData };
        newAdminData[field] = value;
        setAdminData(newAdminData);
    }
    const handleAdminSubmit = (e) => {
        const user = { ...adminData };

        fetch('https://intense-dawn-05513.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('admin added successfully');
                }
            })
        e.preventDefault();
    }
    return (
        <Container>
            <h2>Make an admin</h2>
            <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>Admin</Typography>
                    <form onSubmit={handleAdminSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            onBlur={handleOnBlur}
                            required
                            id="filled-basic"
                            name="email"
                            label="email address"
                            variant="filled" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            onBlur={handleOnBlur}
                            required
                            name="password"
                            label="password"
                            variant="filled" />
                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained" onClick={handleAdminSubmit}>Submit</Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src="https://image.freepik.com/free-vector/follow-me-social-business-theme-design_24877-50426.jpg" style={{ width: '500px' }} alt="" />
                </Grid>
            </Grid>
        </Container >
    );
};

export default MakeAdmin;