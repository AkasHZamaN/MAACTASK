import React from 'react';
import NavbarTop from '../Navbar/NavbarTop';
import DashboardPortal from './DashboardPortal';

const Dashboard = () => {
    return (
        <div>
            <NavbarTop></NavbarTop>
            <DashboardPortal></DashboardPortal>
        </div>
    );
};

export default Dashboard;