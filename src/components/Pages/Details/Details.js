import React from 'react';
import Review from './Review';
import ServiceDetails from './ServiceDetails';

const Details = () => {
    return (
        <div className='grid grid-cols-2'>
            <div>
            Nothing
                <ServiceDetails />
            </div>
            <div>
                <Review />
            </div>
        </div>
    );
};

export default Details;