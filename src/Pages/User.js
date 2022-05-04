import { getAllByLabelText } from "@testing-library/react";
import { Alert } from "antd";
import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"; 
import { applyMiddleware } from "redux";
import { authActions } from "../Features/store";
const User = () => {
  const dispatch=useDispatch();
  const userName = useSelector((state) => state.auth.userName);
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const userPassword = useSelector((state) => state.auth.userPassword);
  const passwordInputRef = useRef();
  const logoutHandler=()=>{
    dispatch(authActions.logout())
  }
  const changePasswordHandler=()=>{
    const newPassword=passwordInputRef.current.value;
    if(newPassword.trim().length<5){
    alert("Password is wrong");
    return;
  }
    dispatch(authActions.passwordChange(passwordInputRef.current.value))
    alert("Password Changed");
    passwordInputRef.current.value="";
  }
  console.log(auth)
  console.log(userPassword)
  return (
    <>
      <div className="form_container">
        <div className="input_element">UserName  : {userName}</div>
        <div className="input_element">
          <label>New Password  :  </label>
          <input type="text" ref={passwordInputRef} />
        </div>
      </div>
      <div className="input_container">
        <button  className="input_button" onClick={changePasswordHandler}>Save Password</button>
        <button className="input_button" onClick={logoutHandler}>Logout</button>
      </div>
    </>
  );
};

export default User;
