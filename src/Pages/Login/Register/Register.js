import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import auth from "../../../firebase.init";
import { useCreateUserWithEmailAndPassword, useUpdateEmail, useUpdateProfile } from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [agree, setAgree] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

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
     await updateProfile({ displayName:name });
     alert('Updated profile');
     navigate("/home");

  };
  return (
    <div className="register-form">
      <h1 className=" text-center text-primary">Please Register</h1>
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
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />

        <label
          className={agree ? "ps-2 text-primary" : "ps-2 text-danger"}
          htmlFor="terms"
        >
          {" "}
          Accept Genius Car Terms and Conditions{" "}
        </label>

        <input
          disabled={!agree}
          className="btn btn-primary mx-auto w-50 d-block "
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
        <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default Register;
