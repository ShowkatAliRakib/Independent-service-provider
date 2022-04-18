import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Service.css"

const Service = (props) => {
    console.log( props.service);
    const {img, comment, title} = props.service;
    const navigate = useNavigate();

    const  navigateToAppointment = id => {
        navigate(`/appointment`);
    }

    return (
        <div  className="card">
           <div>
           <img  src={img} alt="" srcSet="" />
           <h2>{title}</h2>
            <p>{comment}</p>
            

           </div>
           <button onClick={navigateToAppointment} className=' ms-5 mb-2  btn btn-secondary '>Request Appointment</button>
        </div>
    );
};

export default Service;