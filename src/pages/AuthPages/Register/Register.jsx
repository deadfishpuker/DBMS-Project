import React from "react";
import { Link } from 'react-router-dom'
import RegisterForm from "../../../components/AuthComponents/RegisterForm";

const Register = () => {
  return (
    <div className="container-fluid">
      <h1 className="display-1 my-5 text-center">Register</h1>
      <div className="row">
        <div className="col-md-5 mx-auto my-5">
          <RegisterForm/>
        </div>
        <Link to ="/login" className="text-center">
          Already a member? Login
        </Link>
      </div>
    </div>
  )
}

export default Register