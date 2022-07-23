import React from 'react';
import frame15 from '../../images//Frame 15.png';
import { CubeIcon } from '@heroicons/react/solid';

const ProductFeature = () => {
    return (
        <div className='mt-72'>
            <p className='text-center mt-64 text-primary'>Product Features</p>
            <h1 className='text-center text-3xl font-bold'>Make more out of your data</h1>

            <div className='w-100 p-4 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <div>
                    <div className='grid justify-items-end my-4'>
                        <CubeIcon className='w-12 h-12 p-2 rounded shadow-lg my-4'></CubeIcon>
                        <h1 className='font-bold'>Real-time analytics</h1>
                        <small className='text-end'>See product usage, sign-ins, feature metrics change as users work on your.</small>
                    </div>
                    <div className='grid justify-items-end my-4'>
                        <CubeIcon className='w-12 h-12 p-2 rounded shadow-lg my-4'></CubeIcon>
                        <h1 className='font-bold'>Intuitive dashboard</h1>
                        <small className='text-end'>See product usage, sign-ins, feature metrics change as users work on your.</small>
                    </div>
                    <div className='grid justify-items-end my-4'>
                        <CubeIcon className='w-12 h-12 p-2 rounded shadow-lg my-4'></CubeIcon>
                        <h1 className='font-bold'>Smart suggestions</h1>
                        <small className='text-end'>See product usage, sign-ins, feature metrics change as users work on your.</small>
                    </div>
                    
                </div>
                    <img className='h-4/5 mx-auto' src={frame15} alt="" />
                <div>
                <div>
                    <div className='my-4'>
                        <CubeIcon className='w-12 h-12 p-2 rounded shadow-lg my-4'></CubeIcon>
                        <h1 className='font-bold'>Multiple views</h1>
                        <small>See product usage, sign-ins, feature metrics change as users work on your.</small>
                    </div>
                    <div className='my-4'>
                        <CubeIcon className='w-12 h-12 p-2 rounded shadow-lg my-4'></CubeIcon>
                        <h1 className='font-bold'>Al-lead diagnoses</h1>
                        <small>See product usage, sign-ins, feature metrics change as users work on your.</small>
                    </div>
                    <div className='my-4'>
                        <CubeIcon className='w-12 h-12 p-2 rounded shadow-lg my-4'></CubeIcon>
                        <h1 className='font-bold'>Responsive</h1>
                        <small>See product usage, sign-ins, feature metrics change as users work on your.</small>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    );
};

export default ProductFeature;