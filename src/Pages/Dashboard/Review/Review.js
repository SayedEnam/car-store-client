import { Alert, Button, Container, Grid, Snackbar, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const Review = () => {
    const [reviewData, setReviewData] = useState({});
    const { user } = useAuth();
    const [confirm, setConfirm] = useState(false);

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

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviewData = { ...reviewData };
        newReviewData['name'] = user?.displayName;
        newReviewData['picture'] = user?.photoURL;
        newReviewData[field] = value;
        setReviewData(newReviewData);
    }
    const handleReviewSubmit = (e) => {
        fetch('https://intense-dawn-05513.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
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
        <Container>
            <h2>Please, give your review here</h2>
            <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>Review</Typography>
                    <form onSubmit={handleReviewSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            onBlur={handleOnBlur}
                            id="filled-basic"
                            name="name"
                            type="name"
                            label="Your Name"
                            autoFocus
                            value={user.displayName}
                            variant="filled" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            onBlur={handleOnBlur}
                            id="filled-basic"
                            name="rating"
                            label="Rating"
                            type="number"
                            variant="filled" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            onBlur={handleOnBlur}
                            id="outlined-textarea"
                            name="comment"
                            label="Comment"
                            placeholder="add your comment here"
                            multiline
                            variant="filled" />
                        <Button sx={{ width: '75%', m: 1 }} onClick={handleClick} type="submit" variant="contained">Submit</Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src="https://image.freepik.com/free-vector/organic-flat-design-feedback-concept_23-2148949461.jpg" alt="" />
                </Grid>
            </Grid>
            {confirm && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Review added successfully
                </Alert>
            </Snackbar>}
        </Container >
    );
};

export default Review;