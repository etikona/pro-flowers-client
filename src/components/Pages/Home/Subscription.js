import React from 'react';
import banner from '../../assets/banner.jpg'
const Subscription = () => {
    return (
        <div>
  <div className="hero min-h-screen my-20"><font></font>
  <div className="hero-content flex-col lg:flex-row-reverse"><font></font>
    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" /><font></font>
    <div><font></font>
      <h1 className="text-5xl font-thin text-sky-900 font-sans">SEND A <br /> SUBSCRIPTION</h1><font></font>
      <p className="py-6 text-xl font-thin">Enjoy free delivery on all your <br />
       flowers plus savings of up to 
        30% when you choose your <br />
         subscription plan.</p><font></font>
      <button className="btn bg-blue-900">subscribed</button><font></font>
    </div><font></font>
  </div><font></font>
</div>
        </div>
    );
};

export default Subscription;