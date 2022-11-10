import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const HomeData = ({ data }) => {
  const { _id, name, img, price, description } = data;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl"><font></font>
        <figure>

          <PhotoView src={img}>
            <img src={img} alt="Shoes" />

          </PhotoView>


        </figure><font></font>
        <div className="card-body"><font></font>
          <h2 className="card-title text-center font-bold">{name}</h2><font></font>
          <p className='font-semibold text-lg text-orange-500'>Price: {price}
          </p><font></font>
          <p className='font-semibold text-lg text-sky-700'>{description.slice(0, 100) + '...'}
          </p><font></font>

          <div className="card-actions justify-end"><font></font>
            <Link to='/services' className="btn bg-blue-900">See all</Link><font></font>
            <Link to={`/details/${_id}`} className="btn bg-blue-900">Details</Link><font></font>
          </div><font></font>
        </div><font></font>
      </div>
    </div>
  );
};

export default HomeData;