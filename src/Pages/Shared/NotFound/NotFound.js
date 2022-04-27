import React from 'react';
import sleeping from '../../../images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <h1 className='text-danger text-center' >404 , NOT FOUND</h1>
            <img src={sleeping} className='w-100' alt="" srcSet="" />

            <h1 className='text-danger text-center'>Mechanic sleeping</h1>
        </div>
    );
};

export default NotFound;