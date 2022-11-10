import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const ServiceDetails = () => {
    const data = useLoaderData();
    

    return (
        <div>
            <h2>All details are here</h2>
        </div>
    );
};

export default ServiceDetails;