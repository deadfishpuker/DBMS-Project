
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
//import {SignOutUser} from "../../../redux/actionCreators/authActionCreator";

const Navbar = () => {

  const {isAuthenticated, user}=useSelector(state => state.auth); //returns object

  return( 
  <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm p-3">
    <Link className="navbar-brand ms-5" to="/dashboard">
      File System
    </Link>
  
  <ul className="navbar-nav ms-auto me-5 d-flex flex-row">
    {
      isAuthenticated ? (
        <>
          <li className="nav-item mx-2">
          <Link className="btn btn-primary btn-sm" to="/">
            Home
          </Link>
          </li>
          <li className="nav-item">
          <button className="btn btn-success btn-sm">
            Logout
          </button>
          </li>
        </>
      )
      :
      (
        <>
          <li className="nav-item mx-2">
          <Link className="btn btn-primary btn-sm" to="/login">
            Login
          </Link>
          </li>
          <li className="nav-item">
          <Link className="btn btn-success btn-sm" to="/register">
            Register
          </Link>
        </li>
        </>
      )
    }
  </ul>
  </nav>
  );
};

export default Navbar;