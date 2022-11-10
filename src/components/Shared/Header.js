import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';



const Header = () => {
  const {user, logout} = useContext(AuthContext);
  // Handle Logout
  const handleLogout = () => {
    logout()
    .then( () => {})
    .error(() => {})
  }

  // Dynamic Routes
const navbar = <>
<li className='font-semibold'><Link to="/home">Home</Link></li>
<li className='font-semibold'><Link to="/blogs">Blog</Link></li>

{
  user?.email?
  <> 
<li className='font-semibold'><Link to="/myReviews">My Reviews</Link></li>
<li className='font-semibold'><Link to="/addService">AddService</Link></li>
<li onClick={handleLogout} className='font-semibold'><button to="/addService">Logout</button></li>
  </>
  :
<li className='font-semibold'><Link to="/login">Login</Link></li>
}
<li className='font-semibold'><Link to="/serviceDetails">ServiceDetails</Link></li>

</>
  return (
    <div>
      <div className="navbar "><font></font>
        <div className="navbar-start"><font></font>
          <div className="dropdown"><font></font>
            <label tabIndex={0} className="btn btn-ghost lg:hidden"><font></font>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg><font></font>
            </label><font></font>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"><font></font>

              {navbar}

            </ul><font></font>
          </div><font></font>
          <a className="btn btn-ghost normal-case text-xl">Pro Flower</a><font></font>
        </div><font></font>
        <div className="navbar-center hidden lg:flex"><font></font>
          <ul className="menu menu-horizontal p-0"><font></font>
            {navbar}
          </ul><font></font>
        </div><font></font>

      </div>
    </div>
  );
};

export default Header;