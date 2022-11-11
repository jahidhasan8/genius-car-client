import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { setAuthToken } from '../../../api/auth';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
// import { getAuth } from "firebase/auth";
// const auth = getAuth();

const SocialLogin = () => {
    const{popUpSignIn}=useContext(AuthContext)
    

    const googleProvider=new GoogleAuthProvider()
    const handleGoogleSignIn=()=>{
        popUpSignIn(googleProvider)
        .then(result=>{
            const user=result.user 
            console.log(user);
            setAuthToken(user)
            
        })
        .catch(error=>console.error(error.message))
    }
    return (
        <div>
            <p className='text-center'><small>Social Login</small></p>
            <p className='text-center'>
                <button onClick={handleGoogleSignIn} className='btn btn-ghost'>Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;