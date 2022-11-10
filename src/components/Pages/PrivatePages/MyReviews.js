import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import MyReview from './MyReview';

const MyReviews = () => {
    const {user} = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([]);

    useEffect( () => {
        fetch(`https://pro-flowers-server.vercel.app/reviews?name=${user?.email}`, {
            headers: {
                authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setMyReviews(data))
    }, [user?.email]);

    const handleDelate = id => {
        const proceed = window.confirm("Are you sure to delete?");
        if(proceed){
            fetch(`https://pro-flowers-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remaining = myReviews.filter(review => review._id !== id);
                    setMyReviews(remaining);
                }
            })
        }
    }

    return (
        <div>
            <div className="overflow-x-auto  w-full"><font></font>
  <table className="table w-full"><font></font>
   
  <tbody>
    {
        myReviews.map(review => <MyReview 
        key={review._id}
        review = {review}
        handleDelate={handleDelate}
        ></MyReview>)
    }
  </tbody>
   
  </table>
</div>
        </div>
    );
};

export default MyReviews;