import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import { setAuthToken } from '../../api/auth';


const SignUp = () => {
      
    const {createUser,popUpSignIn,verifyEmail}=useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider=new GithubAuthProvider()

    const handleSignUp=(e)=>{
        e.preventDefault();
        const form=e.target 
        const name=form.name.value 
        const email=form.email.value 
        const password=form.password.value 

        createUser(email,password)
        .then(result=>{
             const user=result.user 
             console.log(user);
             handleVerify()
             form.reset()
             setAuthToken(user)
        })
        .catch(error=>toast.error(error.message))
    }
     
    const handleVerify=()=>{
         verifyEmail()
         .then(()=>toast.success('Verify message send,please verify your email'))
         .catch(error=>toast.error('sorry,your email not verified'))
    }
    const handleGoogleSignIn=()=>{
        popUpSignIn(googleProvider)
        .then(result=>{
            const user=result.user 
            console.log(user);
            toast.success('Sign in with Google successful')
        })
        .catch(error=>toast.error(error.message))
    }

    const handleGithubSignIn=()=>{
      popUpSignIn(githubProvider)
      .then(result=>{
        const user=result.user 
        console.log(user);
        toast.success('Sign in with Github successful')
    })
    .catch(error=>toast.error(error.message))
    }

    return (
        <div className="hero w-full my-20">
        <div className="hero-content flex-col lg:flex-row grid md:grid-cols-2 gap-20">
            <div className="text-center lg:text-left">
               <img className='w-3/4' src={login} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">

            <h1 className="text-5xl text-center font-bold ">Sign Up </h1>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                      
                    </div>
                    <div className="form-control mt-6">
                       
                    <input className="btn btn-primary" type="submit" value="Sign Up" />

                    </div>
                   <span> <p className='text-center'>Or Sign Up with</p></span>
                   <div className='flex justify-center mt-2'>
                   <Link onClick={handleGoogleSignIn} className="w-10 h-10 flex justify-center bg-slate-200 mx-4 border items-center rounded-full"><FcGoogle></FcGoogle></Link>

                  <Link onClick={handleGithubSignIn} className="w-10 h-10 flex justify-center items-center border rounded-full  bg-slate-200 "><BsGithub></BsGithub></Link>

                   
                   </div>
                </form>
                <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
            </div>
        </div>
    </div>
    );
};

export default SignUp;