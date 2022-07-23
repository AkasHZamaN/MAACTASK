import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center my-60'>
            <progress className="progress w-56"></progress>
        </div>
    );
};

export default Loading;