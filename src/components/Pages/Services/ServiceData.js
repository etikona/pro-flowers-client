import React from 'react';
import { Link } from 'react-router-dom';

const ServiceData = ({data}) => {
    const {name, img, price, description} = data
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
          <p className='font-semibold text-lg text-sky-700'>{description}
          </p><font></font>

          <div className="card-actions justify-end"><font></font>
            <Link to='/services' className="btn bg-blue-900">See all</Link><font></font>
            <Link to='/serviceDetails' className="btn bg-blue-900">Details</Link><font></font>
          </div><font></font>
        </div><font></font>
      </div>
        </div>
    );
};

export default ServiceData;