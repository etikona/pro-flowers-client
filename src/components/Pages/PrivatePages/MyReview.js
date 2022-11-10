import React, { } from 'react';
import useTitle from '../../Hooks/useTitle';

const MyReview = ({ review, handleDelate, handleUpdate }) => {
  const { _id, name, photoURL, comment, status } = review;
  useTitle('MyReview')

  return (

    <tr>
      <th>
        <button onClick={() => handleDelate(_id)} className="btn btn-circle btn-outline">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photoURL} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>

        </div>
      </td>
      <td>
        Name: {name}

      </td>
      <td>Text:  {comment}</td>
      <td> <button onCanPlay={() => handleUpdate(_id)} className='btn bg-green-900'>{status ? 'update' : 'pending'}</button> </td>

    </tr>

  );
};

export default MyReview;