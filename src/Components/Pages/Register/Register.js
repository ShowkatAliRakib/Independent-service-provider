
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import auth from "../../../Firebase/firebase.init";
import { useCreateUserWithEmailAndPassword,} from "react-firebase-hooks/auth";
import SingIn from "../../Shared/SingIn/SingIn";

const Register = () => {

    const [createUserWithEmailAndPassword, user, loading, error] =
      useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  
     
  
    const navigate = useNavigate();
  
    const navigateLogin = () => {
      navigate("/login");
    };
   
    if (user) {
        console.log(user );
    }
  
    const handleRegister = async (event) => {
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const password = event.target.password.value;
      // const agree = event.target.terms.checkbox;
  
    
  
       await   createUserWithEmailAndPassword(email, password);
     
       navigate("/home");
  
    };
    return (
        <div className="register-form">
        <h1 className=" text-center text-secondary">Please Register</h1>
        <form onSubmit={handleRegister}>
          <input type="text" name="name" id="" placeholder="Your Name" />
  
          <input
            type="text"
            name="email"
            id=""
            placeholder="Email Address"
            required
          />
  
          <input
            type="password"
            name="password"
            id="#"
            placeholder="Password"
            required
          />
  
         
       
          <input
            className="btn btn-secondary mx-auto w-50 d-block "
            type="submit"
            value="Register"
          />
          <p>
            Al Ready Have an Account?{" "}
            <Link
              to="/login"
              className="text-primary pe-auto text-decoration-none"
              onClick={navigateLogin}
            >
              Please Login
            </Link>
          </p>
        </form>
        <SingIn></SingIn>
      </div>
    );
};

export default Register;