import React from 'react';
import Footer from '../Footer/Footer';
import NavbarTop from '../Navbar/NavbarTop';
import SignIn from './SignIn';

const Login = () => {
    return (
        <div>
            <NavbarTop></NavbarTop>
            <SignIn></SignIn>
            <Footer></Footer>
        </div>
    );
};

export default Login;