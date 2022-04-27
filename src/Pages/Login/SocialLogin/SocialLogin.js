import React from "react";
import "./SocialLogin.css";
import google from "../../../images/Social/google.png";
import facebook from "../../../images/Social/facebook.png";
import github from "../../../images/Social/github.png";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorElement;

  if (error || error1) {
   errorElement=<div>
        <p className="text-danger">Error: {error?.message} {error1?.message}</p>
      </div>
  
  }


  if (user || user1) {
    navigate("/home");
  }


  return (
    <div>
      <div className="d-flex align-Item-center">
        <div style={{ height: "1px" }} className="bg-primary w-50">
          {" "}
        </div>
        <p>or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50">
          {" "}
        </div>
      </div>

      {errorElement}

      <div>
        <button
        onClick={() => signInWithGoogle()}
         className="btn btn-info w-50 d-block mx-auto my-2">
          <img className="image-icon" src={google} alt="" srcset="" />
          <span className="px-2"> Google Sing In</span>
        </button>
      </div>
      <div>
        <button className="btn btn-info w-50 d-block mx-auto my-2">
          <img className="image-icon" src={facebook} alt="" srcset="" />
          <span className="px-2"> Facebook Sing In</span>
        </button>
      </div>
      <div>
        <button
        onClick={() => signInWithGithub()}
         className="btn btn-info w-50 d-block mx-auto">
          <img className="image-icon" src={github} alt="" srcset="" />
          <span className="px-2"> GitHub Sing In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
