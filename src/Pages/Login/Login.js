import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
const Login = () => {
     
    const {signIn}=useContext(AuthContext)
    const handleLogin=(e)=>{
        e.preventDefault();
        const form=e.target 
        const email=form.email.value 
        const password=form.password.value 
         
        signIn(email,password)
        .then(result=>{
            const user=result.user
            console.log(user);
        })
        .catch(error=>console.error(error.message))
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
                </div>
            </div>
        </div>
    );
};

export default Login;