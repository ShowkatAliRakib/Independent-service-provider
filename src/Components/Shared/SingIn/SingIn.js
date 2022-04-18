import React from "react";
import google from "../../../image/logo/google.png";

import {useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import { useNavigate } from "react-router-dom";

const SingIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;

  if (error ) {
   errorElement=<div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
  
  }


  if (user) {
    navigate("/home");
  }


  return (
    <div>
      <div className="d-flex align-Item-center">
        <div style={{ height: "1px" }} className="bg-secondary w-50">
          {" "}
        </div>
        <p>or</p>
        <div style={{ height: "1px" }} className="bg-secondary w-50">
          {" "}
        </div>
      </div>

      {errorElement}

      <div>
        <button
        onClick={() => signInWithGoogle()}
         className="btn btn-secondary w-50 d-block mx-auto my-2">
          <img className="image-icon" src={google} alt="" srcset="" />
          <span className="px-2"> Google Sing In</span>
        </button>
      </div>
    
    </div>
  );
};

export default SingIn;
