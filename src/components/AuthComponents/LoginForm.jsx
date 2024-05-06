import React from "react";
import { Link } from "react-router-dom";
import { signInUser } from "../../redux/actionCreators/authActionCreator";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [success, setSuccess] = React.useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
  if(!email || !password){
    alert("Please fill in all fields");
    return;
  }
  dispatch(signInUser(email,password,setSuccess));
};
React.useEffect(()=>{
  if(success){
      navigate("/dashboard");
  }
},[success])
  return (
    <div className="50-w p-5 rounded bg-white" >
    <form autoComplete="off" onSubmit={handleSubmit}>
        <h3 className="text-center"> Log in</h3>
        <div className="form-group my-2">
            <input type="email" 
            name="email" 
            className="form-control" 
            placeholder="Email"
            value={email}
            onChange= {(e) => setEmail(e.target.value)}
            />
        </div>
        <div className="form-group my-2">
            <input type="password"
             name="password" 
             className="form-control" 
             placeholder="Password"
             value={password}
             onChange= {(e) => setPassword(e.target.value)}
             />
        </div>
        <button type="submit" className="btn btn-primary my-2 form-control">Login</button>
        <Link to ="/register" className="text-center">
          Not a member? Register
        </Link>
    </form>
    </div>

  )
}

export default LoginForm