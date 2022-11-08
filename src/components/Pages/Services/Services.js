import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceData from './ServiceData';

const Services = () => {
    const services = useLoaderData();
    
    return (
        <div className='grid grid-cols-1 gap-8 my-3 mx-4'>
            {
                services.map(data => <ServiceData
                key={data._id}
                data={data}
                ></ServiceData>)
            }
        </div>
    );
};

export default Services;