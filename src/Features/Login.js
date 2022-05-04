import React from 'react'
import { useSelector, } from 'react-redux';
import { useDispatch } from 'react-redux';
import classes from './Login.module.css'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { authActions } from './store';
const Login = () => {
    let navigate=useNavigate();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    // const state=useSelector(state=>state.auth.isAuthenticated);
    const dispatch=useDispatch();
  
  
    const submitHandler = (event) => {
      event.preventDefault();
  
      const enteredEmail = emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;
      dispatch(authActions.login())
      dispatch(authActions.setUser({userName:enteredEmail,userPassword:enteredPassword}));
      navigate('/');
    }
  
      
    return (
      <section className={classes.auth}>
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Your Password</label>
            <input
              type='password'
              id='password'
              required
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.actions}>
             <button>Login</button>
          </div>
        </form>
      </section>
    );
}

export default Login
