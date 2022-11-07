import React from 'react';
import { useLoaderData } from 'react-router-dom';
import About from './About';
import Banner from './Banner';
import HomeData from './HomeData';
import Subscription from './Subscription';

const Home = () => {
  const data = useLoaderData();
  const homeData = data.slice(0,3);
  console.log(homeData);
    return (
        <div>
          {/* Banner */}
          <Banner/>
          <h2 className='text-5xl font-light'> Services</h2>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 m-10'>
            
          {/* Services */}
            {
              homeData.map(data => <HomeData
              key={data._id}
              data={data}
              ></HomeData>)
            }
  
          </div>
          {/* Extra part-1 */}
          <Subscription/>
          <About/>
        </div>
    );
};

export default Home;