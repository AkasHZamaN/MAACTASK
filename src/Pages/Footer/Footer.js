import React from 'react';
import footerLogo from '../../images/Frame 27.png';
import facebook from '../../images/facebook.png';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';

const Footer = () => {
    return (
        <div className='bg-accent text-center text-white p-6'>
            <div>
                <img className='mx-auto' src={footerLogo} alt="" />
                <p className='w-2/4 mx-auto'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque.</p>
            </div>
            <div className='flex justify-center my-6 gap-4'>
                <img className='w-10 h-10' src={facebook} alt="" />
                <img className='w-10 h-10' src={github} alt="" />
                <img className='w-10 h-10' src={linkedin} alt="" />
            </div>
            <hr className='bg-blue-700 opacity-30 w-4/5 mx-auto' />
            <h1 className='text-center font-bold mt-6'>© All rights reserve by <span className='text-red-600'> MAAC</span></h1>
        </div>
    );
};

export default Footer;