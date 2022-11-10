import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import Review from './Review';



const Details = () => {
    const { description, img, name, price, _id } = useLoaderData();
    const user = useContext(AuthContext);
    useTitle('Details');

    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const comment = form.comment.value;
        form.reset()
        const review = { _id, name, photoURL, comment };

        fetch('https://pro-flowers-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert("Review place successfully")
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div >
            <div className='grid grid-cols-2'>
                <div>
                    <div className="card card-side bg-sky-200 m-4 shadow-xl">
                        <figure><img src={img} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <p>{description}</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <form onSubmit={handleReview}>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered input-info my-2 w-full max-w-xs" />
                            <input type="url" name="photoURL" id="" placeholder='photoURL' className="input input-bordered input-info w-full max-w-xs" />
                            <input type="number" name='rating' placeholder="Ratings" className="input input-bordered input-info my-2 w-full max-w-xs" />
                            <div>
                                <textarea className="textarea textarea-info w-80" name='comment' placeholder="Comment"></textarea>
                            </div>
                            <input type="submit" className='btn bg-blue-900 px-20 my-3' value="Review" />
                        </form>
                    </div>
                </div>
            </div>
            <div className='justify-center items-center my-10 mx-4'>
                <h2 className="text-5xl font-thin text-sky-900 font-sans mb-4 text-center"> REVIEWS</h2><font></font>
                <Review></Review>
            </div>
        </div>
    );
};

export default Details;