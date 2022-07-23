import React from 'react';
import brand1 from '../../images/Frame 22.png';
import brand2 from '../../images/Frame 23.png';
import brand3 from '../../images/Frame 24.png';
import brand4 from '../../images/Frame 25.png';
import brand5 from '../../images/Frame 26.png';

const Brand = () => {
    return (
        <div>
            <h1 className='text-center text-primary text-2xl my-12 font-bold'>5,000+ high impect team reply on FieldX</h1>
            <div className='grid justify-items-center grid-cols-2 lg:grid-cols-5 gap-12 p-8'>
                <img src={brand1} alt="" />
                <img src={brand2} alt="" />
                <img src={brand3} alt="" />
                <img src={brand4} alt="" />
                <img src={brand5} alt="" />
            </div>
            
        </div>
    );
};

export default Brand;