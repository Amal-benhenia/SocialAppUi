import './register.css'

const Register = () => {
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
    <input placeholder='Your user name' className='loginInput'/>
    <input placeholder='Your password' className='loginInput'/>
    <input placeholder='Your Password again' className='loginInput'/>
    <button className='loginButton'>Register</button>
    
    <button className='loginRegister'>Log into account</button>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Register