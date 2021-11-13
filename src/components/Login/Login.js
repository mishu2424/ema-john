import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
import './Login.css'
const Login = () => {
    const {user,googleSignIn}=useAuth()
    const location=useLocation();
    const history=useHistory();
    const redirect_uri=location.state?.from||'/shop'

    const handlerSignIn=()=>{
        googleSignIn()
        .then((result)=>{
            history.push(redirect_uri);
        }).catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div className='login'>
           <div>
           <input type="email" name="" id="" placeholder='Your name' />
            <br />
            <input type="password" name="" id="" placeholder='Your password' />
            <br />
            <input type="password" name="" id="" placeholder='reset password' />
            <br />
            <p className='text-center'>Or</p>
            <button onClick={handlerSignIn} type="submit" style={{
                backgroundColor:'goldenrod',
                color:'white',
                border:'none'
            }}>Sign with google</button>
            <p>Already have an account?<Link to='/register'>New account?</Link></p>

           </div>

        </div>
    );
};

export default Login;