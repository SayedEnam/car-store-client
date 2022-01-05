import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { setOrders } from '../../../redux/actions';

const ManageAllOrders = () => {

    const allOrders = useSelector((state) => state.ordersReducer.orders);
    const dispatch = useDispatch();

    // Updating order status
    const handleUpdatedStatus = (_id, status, ...rest) => {
        alert('updated');
        const url = `https://intense-dawn-05513.herokuapp.com/allOrders/${_id}`;
        const updatedStatus = 'shipped';
        const updatedUser = { status: updatedStatus }
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
    }

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
                        dispatch(setOrders(remainingOrders));
                    }
                })
        }
    }
    return (
        <div>
            <h2>Manage All Orders</h2>
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
                        {allOrders.map((row) => {
                            const { _id, status, email, car, displayName, phone, address } = row;
                            return (
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
                                        <Button
                                            variant="contained"
                                            onClick={() => handleUpdatedStatus(_id, status, email, displayName, car, phone, address)}
                                        >{row.status}</Button>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button
                                            variant="contained"
                                            sx={{ background: '#f50057' }}
                                            onClick={() => handleDelete(row._id)}
                                        >Delete Order</Button>
                                    </TableCell>
                                </TableRow>)
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageAllOrders;