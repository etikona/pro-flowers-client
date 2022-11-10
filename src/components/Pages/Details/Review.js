import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Review = () => {
   const [reviews, setReviews] = useState([])
    useEffect( () => {
      fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => console.log(data))
    },[])
    return (
        <div>
          {
            reviews.map(review =>  <>
        
                    <div className="card w-96 bg-neutral text-neutral-content"><font></font>
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