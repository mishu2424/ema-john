import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
const Register = () => {
    return (
        <div className='login'>
          
          <div>
            <input type="email" name="" id="" placeholder='Your email' />
            <br />
            <input type="password" name="" id="" placeholder='Your password' />
            <br />
            <button type="submit" style={{
                backgroundColor:'goldenrod',
                color:'white',
                border:'none'
            }}>Google register</button>
            <p>Already have an account?<Link to='/Login'>Log in</Link></p>
          </div>

        </div>
    );
};

export default Register;