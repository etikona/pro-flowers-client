import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    // const data = useLoaderData();
    // console.log(data);
   const [service, setService] = useState([]);

    useEffect( (id) => {
        // const url = `https://pro-flowers-server.vercel.app/services/${id}`, {};
        fetch(`https://pro-flowers-server.vercel.app/services/${id}`, {
            
            method: "get",
            headers: {
                 "Content-Type": "application/json",
                " Access-Control-Allow-Origin": "*"

            },
            body: JSON.stringify()
        })
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    return (
        <div>
            <h2>All details are here</h2>
        </div>
    );
};

export default ServiceDetails;