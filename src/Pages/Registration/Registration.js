import React from 'react';
import Footer from '../Footer/Footer';
import NavbarTop from '../Navbar/NavbarTop';
import SignUp from './SignUp';

const Registration = () => {
    return (
        <div>
            <NavbarTop></NavbarTop>
            <SignUp></SignUp>
            <Footer></Footer>
        </div>
    );
};

export default Registration;