import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import ServiceData from './ServiceData';

const Services = ({handleAddService}) => {
    const services = useLoaderData();
    const {loader }= useContext(AuthContext);
    // const [addServices, setAddServices] = useState()
    if(loader){
        return  <progress className="progress w-56"></progress>
    }
    
    // // Add to service 
    // const handleAddService = (selectedService) => {
    //     console.log(selectedService);
    //     let newService = [];
    //     const exists = services.find(service => service._id === selectedService._id);
    //     if(!exists){
    //         newService = [...addServices, selectedService]
    //     }
    //     else{
    //       const  rest = services.filter(service => service._id !== selectedService._id);
    //       newService = [...rest, exists]
    //     }
    //     setAddServices(newService)

    // }
    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 my-3 mx-4'>
            {
                services.map(data => <ServiceData
                key={data._id}
                data={data}
                handleAddService={handleAddService}
                ></ServiceData>)
            }
        </div>
    );
};

export default Services;