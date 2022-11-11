import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
const Login = () => {

    const { signIn, user } = useContext(AuthContext)
    const location = useLocation()
    const from = location.state?.from.pathname || '/'
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value
        const password = form.password.value


        signIn(email, password)
            .then(result => {
                const user = result.user
                const currentUser = {
                    email: user.email
                }
                // get jwt token
                fetch('https://genius-car-server-wine.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('genius-token', data.token);
                        navigate(from, { replace: true })
                    });
                console.log(user);
                form.reset()
                if (user?.emailVerified) {
                    toast.success('successfully login')

                }
                else {
                    toast.error('please verify your email, before sign in')
                }

            })
            .catch(error => toast.error(error.message))
    }
    return (
        <div className="hero w-full my-20">
            <div className="hero-content flex-col lg:flex-row grid md:grid-cols-2 gap-20">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">

                    <h1 className="text-5xl text-center font-bold ">Login </h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">

                            <input className="btn btn-primary" type="submit" value="Login" />

                        </div>
                    </form>
                    <p className='text-center'>New to Genius Car <Link className='text-orange-600 font-bold' to='/signup'>Sign Up</Link></p>
                    <SocialLogin></SocialLogin>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;