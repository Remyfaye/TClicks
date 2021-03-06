

import './login.css'
import {Link} from 'react-router-dom'

export default function Login(){
    return(
        <div className='login'>
            <div className='loginWrapper'>
                <div className='loginLeft'>
                    <h3 className='loginLogo'>Tclicks</h3>
                    <span className='loginDesc'>Connect With The World Around You</span>
                </div>
                <div className='loginRight'>
                    <div className='loginBox'>
                        <input placeholder='email' className='loginInput'/>    
                        <input placeholder='password' className='loginInput'/>
                        <button className='loginBtn'><Link to='/home' className='textLink'>Log In</Link></button>
                        <span className='loginForgot'>Forgot Password?</span>
                        <button className='loginRegisterBtn'>Create a New Account</button>
                    </div>
                </div>

                
            </div>
        </div>
    )
}