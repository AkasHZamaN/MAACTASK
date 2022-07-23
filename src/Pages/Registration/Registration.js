import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import SignUp from './SignUp';

const Registration = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SignUp></SignUp>
            <Footer></Footer>
        </div>
    );
};

export default Registration;