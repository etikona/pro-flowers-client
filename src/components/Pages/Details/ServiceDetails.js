import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            <h2>All details are here</h2>
        </div>
    );
};

export default ServiceDetails;