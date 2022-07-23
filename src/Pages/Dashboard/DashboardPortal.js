import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardPortal = () => {
    return (
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <h1 className='text-center font-bold text-primary'>Wlecome to MAACTASK Dahboard!</h1>
    <Outlet></Outlet>
  
  </div> 
  <div class="drawer-side">
    <label htmlFor="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to={'#'}>Region List</Link></li>
      <li><Link to={'/dashboard/createRegion'}>Create Region</Link></li>
      <li><Link to={'/dashboard/areaList'}>Area List</Link></li>
      <li><Link to={'/dashboard/createArea'}>Create Area</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default DashboardPortal;