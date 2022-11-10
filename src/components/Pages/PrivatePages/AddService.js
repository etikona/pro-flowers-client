import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';

const AddService = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('https://pro-flowers-server.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    
    // Add to service 
    const handleAddService = (selectedService) => {
        
        let newService = [];
        const exists = services.find(service => service._id === selectedService._id);
        if(!exists){
            newService = [...services, selectedService]
        }
        else{
          const  rest = services.filter(service => service._id !== selectedService._id);
          newService = [...rest, exists]
        }
        setServices(newService)

    }

    return (
        <div>
           
 
        </div>
    );
};

export default AddService;