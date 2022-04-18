import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');

  const handleEmail= (e)=>{
    setEmail(e.target.name.value)
  }

  const handlePassword=(e)=>{
    setPassword(e.target.name.value)
  }

  

  const handleSubmit= (e)=>{
    e.preventDefault()
    console.log( email, password);
  }






    return (
        <div className="container w-50 mx-auto m-5 p-5">
            <Form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" name="email" onChange={handleEmail} className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" name="password" onChange={handlePassword} className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</Form>
        </div>
    );
};

export default Login;