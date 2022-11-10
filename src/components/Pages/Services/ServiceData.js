import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const ServiceData = ({data, handleAddService}) => {
    const {_id,name, img, price, description} = data;
    useTitle('Services')
    return (
        <div>
    <div className="card card-compact w-96 bg-base-100 shadow-xl"><font></font>
        <figure>
            <img src={img} alt="Shoes" />
        </figure><font></font>
        <div className="card-body"><font></font>
          <h2 className="card-title text-center font-bold">{name}</h2><font></font>
          <p className='font-semibold text-lg text-orange-500'>Price: {price}
          </p><font></font>
          <p className='font-semibold text-lg text-sky-700'>{description.slice(0,100)+ '...'}
          </p><font></font>

          <div className="card-actions justify-end"><font></font>
            <Link to='/services' className="btn bg-blue-900">See all</Link><font></font>
            <Link to='/addService' onClick={ () => handleAddService(data)} className="btn bg-blue-900">Add Service</Link><font></font>
            <Link to={`/details/${_id}`} className="btn bg-blue-900">Details</Link><font></font>
          </div><font></font>
        </div><font></font>
      </div>
        </div>
    );
};

export default ServiceData;