import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import './Login.css'
const Login = () => {
    useTitle('Login')
    const [error, setError] = useState(null);
    const { loginUser, google } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/home';

    //  Login user by email and password
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // Error displaying
        if (password.length < 6) {
            setError("You are given wrong password!")
            return;
        }

        // Creating user
        loginUser(email, password)
            .then(res => {
                const user = res.user;
                // 
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);
                // 
                // JWT Token
                fetch('https://pro-flowers-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        localStorage.setItem('token', data.token);
                        navigate(from, { replace: true });
                    })
            })
            .catch(err => {
                const msg = err.message;
            });
        form.reset();

    }

    const googleLogin = () => {
        google()
            .then(res => {
                const user = res.user;
                navigate(from, { replace: true })
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='form-container'>
            <h3 className='form-title'>Login</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required id="" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required id="" />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <button onClick={googleLogin} className='btn btn-outline my-2'>Continue with Google</button>
            <p className='err-text'>{error}</p>
            <p><Link to='/signIn'>create a new account</Link></p>
        </div>
    );
};

export default Login;