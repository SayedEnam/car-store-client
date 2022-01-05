import React from 'react';
import { Button, Container, Rating, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { setCars } from '../../../redux/actions';

const ManageCars = () => {
    // const [cars, setCars] = useState([]);
    // useEffect(() => {
    //     fetch('https://intense-dawn-05513.herokuapp.com/cars')
    //         .then(res => res.json())
    //         .then(data => setCars(data))
    // }, [])
    const cars = useSelector((state) => state.carsReducer.cars);
    const dispatch = useDispatch();

    // deleting order
    const handleDelete = (_id) => {
        const confirm = window.confirm('Do you want to delete?')
        if (confirm) {
            const url = `https://intense-dawn-05513.herokuapp.com/cars/${_id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted seccessfully');
                        const remainingCars = cars.filter(car => car._id !== _id)
                        dispatch(setCars(remainingCars));
                    }
                })
        }
    }
    return (
        <Container>
            <h2>Manage all cars here</h2>
            <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 3 }}>
                <TableContainer sx={{ maxHeight: 500 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center"> <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Car Picture</Typography> </TableCell>
                                <TableCell align="center"> <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Car Name</Typography> </TableCell>
                                <TableCell align="center"> <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Ratings</Typography> </TableCell>
                                <TableCell align="center"> <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Delete Car</Typography> </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cars.map((row) => {
                                const { _id, picture, name, rating } = row;
                                return (
                                    <TableRow
                                        key={row._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="center">
                                            <img src={picture} style={{ width: '200px' }} alt="" />
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row">
                                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{name}</Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Rating name="read-only" value={rating} readOnly />
                                        </TableCell>
                                        <TableCell align="center">
                                            <Button
                                                variant="contained"
                                                sx={{ background: '#f50057' }}
                                                onClick={() => handleDelete(_id)}
                                            >Delete Car</Button>
                                        </TableCell>
                                    </TableRow>)
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Container>
    );
};

export default ManageCars;