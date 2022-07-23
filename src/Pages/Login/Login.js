import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import SignIn from './SignIn';

const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SignIn></SignIn>
            <Footer></Footer>
        </div>
    );
};

export default Login;