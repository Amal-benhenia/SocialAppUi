import './login.css'

const Login = () => {
  return (
    <div>
    <div className='loginContainer'>
    <div className='loginWrapper'>
    <div className='loginLeft'>
    <h3 className='loginLogo'>AmalSocial</h3>
    <span className='loginDesc'>Connect with friends and the world around you on AmalSocial</span>
    </div>
    <div className='loginRight'>
    <div className='loginBox'>
    <input placeholder='Your Email' className='loginInput'/>
    <input placeholder='Your Password' className='loginInput'/>
    <button className='loginButton'>Log in</button>
    <span className='loginForgotPass'>Forgot your password?</span>
    <button className='loginRegister'>Create A New Account</button>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Login