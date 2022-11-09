import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import Review from './Review';
import ServiceDetails from './ServiceDetails';

const Details = () => {
    const {description, img, name, price}= useLoaderData();
    console.log(description);
    useTitle('Details')
    return (
        <div className='grid grid-cols-2'>
            <div>
            <div className="card card-side bg-sky-200 m-4 shadow-xl">
  <figure><img src={img} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
   
  </div>
</div>
            </div>
            <div>
                <Review />
            </div>
        </div>
    );
};

export default Details;