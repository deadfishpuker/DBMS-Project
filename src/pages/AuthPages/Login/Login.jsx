import React from 'react'
import LoginForm from '../../../components/AuthComponents/LoginForm'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="container-fluid"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
      backgroundImage: 'url("/src/assets/gradientflutt3.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundColor: '#007bff',
      margin: 0,
      padding: 0
  }}>
      {/*<h1 className="display-1 my-5 text-center">Login</h1>*/}
      <div className="row">
        <div className="col-md-18 mx-auto my-5">
          <LoginForm/>
        </div>
        {/*<Link to ="/register" className="text-center">
          Not a member? Register
        </Link>*/}
      </div>
    </div>
  )
}

export default Login