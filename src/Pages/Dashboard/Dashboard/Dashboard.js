import * as React from 'react';
import './Dashboard.css';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import { Avatar, Button } from '@mui/material';
import Review from '../Review/Review';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../Hooks/useAuth';
import AddNewCar from '../AddNewCar/AddNewCar';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageCars from '../ManageCars/ManageCars';
import DefaultPage from '../DefaultPage/DefaultPage';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const drawerWidth = 250;

function Dashboard(props) {
    const { user, admin } = useAuth();
    const { logOut } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Box>
                <Avatar
                    alt="Remy Sharp"
                    src={user?.photoURL}
                    sx={{ width: 150, height: 150, mx: 'auto', mt: 1 }}
                />
                <Typography variant="subtitle2" sx={{ mt: 1 }}>{user?.displayName}</Typography>
                <Typography variant="h6">{user?.email}</Typography>
            </Box>
            <Box sx={{ mt: 5, mb: 5 }}>
                {
                    !admin ?
                        <Box>
                            <NavLink exact activeClassName="active" to={`${url}`} className="dashboard-tabs"><Button color="inherit">Dashboard</Button></NavLink>
                            <NavLink exact activeClassName="active" to={`${url}/myOrders`} className="dashboard-tabs"><Button color="inherit">My Orders</Button></NavLink>
                            <NavLink exact activeClassName="active" to={`${url}/review`} className="dashboard-tabs"><Button color="inherit">Review</Button></NavLink>
                            <NavLink exact activeClassName="active" to={`${url}/payment`} className="dashboard-tabs"><Button color="inherit">Payment</Button></NavLink>
                        </Box>
                        :
                        <Box>
                            <NavLink exact activeClassName="active" to={`${url}`} className="dashboard-tabs"><Button color="inherit">Dashboard</Button></NavLink>
                            <NavLink exact activeClassName="active" to={`${url}/makeAdmin`} className="dashboard-tabs"><Button color="inherit">Make Admin</Button></NavLink>
                            <NavLink exact activeClassName="active" to={`${url}/addNewCar`} className="dashboard-tabs"><Button color="inherit">Add New Car</Button></NavLink>
                            <NavLink exact activeClassName="active" to={`${url}/manageAllOrders`} className="dashboard-tabs"><Button color="inherit">Manage All Orders</Button></NavLink>
                            <NavLink exact activeClassName="active" to={`${url}/manageCars`} className="dashboard-tabs"><Button color="inherit">Manage Cars</Button></NavLink>
                        </Box>
                }
            </Box>
            <Divider />
            <Box sx={{ mt: 2 }}>
                <Link to="/" className="dashboard-tabs"><Button sx={{ width: "75%", mt: 1 }} variant="outlined">Go Home</Button></Link>
                <Button sx={{ width: "75%", mt: 1 }} variant="contained" onClick={logOut}>Logout</Button>
            </Box>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                {/* nested routing */}
                <Switch>
                    <Route exact path={path}>
                        <DefaultPage></DefaultPage>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addNewCar`}>
                        <AddNewCar></AddNewCar>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageCars`}>
                        <ManageCars></ManageCars>
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
