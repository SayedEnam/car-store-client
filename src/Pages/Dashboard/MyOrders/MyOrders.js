import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';

const MyOrders = () => {
    const { user } = useAuth();
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('https://intense-dawn-05513.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])
    const myOrders = allOrders.filter(order => order?.email === user?.email);

    // deleting order
    const handleDelete = (_id) => {
        const confirm = window.confirm('Do you want to delete?')
        if (confirm) {
            const url = `https://intense-dawn-05513.herokuapp.com/allOrders/${_id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted seccessfully');
                        const remainingOrders = allOrders.filter(order => order._id !== _id)
                        setAllOrders(remainingOrders);
                    }
                })
        }
    }
    return (
        <div>
            <h2>My Orders</h2>
            <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Order Name</TableCell>
                            <TableCell align="center">User Name</TableCell>
                            <TableCell align="center">phone</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Delete Order</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myOrders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center" component="th" scope="row">
                                    {row.car.name}
                                </TableCell>
                                <TableCell align="center">{row.displayName}</TableCell>
                                <TableCell align="center">{row.phone}</TableCell>
                                <TableCell align="center">
                                    <Button variant="contained" sx={{ background: '#f50057' }}>{row.status}</Button>
                                </TableCell>
                                <TableCell align="center">
                                    <Button
                                        variant="contained"
                                        sx={{ background: '#f50057' }}
                                        onClick={() => handleDelete(row._id)}
                                    >Delete Order</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrders;