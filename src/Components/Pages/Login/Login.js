import React  from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';

const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);


  const navigate = useNavigate();




const navigateRegister = () => {
  navigate("/register");
};


// if (user) {
   
//   navigate("/appointment");
// };



const handleSubmit = async (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;



  

};

    return (
        <div className=" w-50 mx-auto m-5 p-5">
           <h1 className=" text-center text-secondary">Please Login</h1>
            <Form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" name="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" name="password"  className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  
 { user ?  <button type="submit"  className="btn btn-secondary">Log out</button> :
 
 <button type="submit"  className="btn btn-secondary">Log in</button>
}

  <p>Have a no Account? <Link to="/register" className="text-primary pe-auto text-decoration-none" onClick={navigateRegister}>Please Register</Link></p>
</Form>
        </div>
    );
};

export default Login;