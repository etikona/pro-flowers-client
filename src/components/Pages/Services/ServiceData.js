import React from 'react';

const ServiceData = ({data}) => {
    const {name, img, price, description} = data
    return (
        <div>
   <div className="card card-side bg-sky-100 shadow-xl"><font></font>
  <figure><img src={img} alt="Movie"/></figure><font></font>
  <div className="card-body"><font></font>
    <h2 className="card-title">{name}</h2><font></font>
    <p>{description}</p><font></font>
    <div className="card-actions justify-end"><font></font>
      <button className="btn bg-blue-900">Watch</button><font></font>
    </div><font></font>
  </div><font></font>
</div>
        </div>
    );
};

export default ServiceData;