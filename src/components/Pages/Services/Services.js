import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import ServiceData from './ServiceData';

const Services = () => {
    const services = useLoaderData();
    const {loader }= useContext(AuthContext);
    if(loader){
        return  <progress className="progress w-56"></progress>
    }
    
    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 my-3 mx-4'>
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