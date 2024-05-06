
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./App.css";
{/*import Login from "./pages/AuthPages/Login/Login";
import Register from "./pages/AuthPages/Register/Register";
import HomePage from "./pages/HomePage/HomePage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
*/}
import { Login, Register, HomePage, DashboardPage } from "./pages";
import { checkIsLoggedIn } from "./redux/actionCreators/authActionCreator";

const App = () => {

    const dispatch= useDispatch();
    useEffect(()=>{
      dispatch(checkIsLoggedIn());
    },[]); //to stay logged in when page refreshed

  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<DashboardPage/>} />
        </Routes>
      </div>
  );
};

export default App;
