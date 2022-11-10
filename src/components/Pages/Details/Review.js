import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Review = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch('https://pro-flowers-server.vercel.app/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
      {
        reviews.map(review => <>

          <div className="card  bg-gray-300 text-neutral-content"><font></font>
            <div className="card-body items-center text-center"><font></font>
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={review.photoURL} />
                </div>
              </div>
              <h2 className="card-title">{review.name}</h2><font></font>
              <p>{review.comment}</p><font></font>
              <p>{review.ratings}</p><font></font>


            </div><font></font>
          </div>
        </>)
      }


    </div>
  );
};

export default Review;