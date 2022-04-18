import React from 'react';
import "./Service.css"

const Service = (props) => {
    console.log( props.service);
    const {img, id, comment, title} = props.service
    return (
        <div  className="card">
           <div>
           <img  src={img} alt="" srcSet="" />
           <h2>{title}</h2>
            <p>{comment}</p>
            <button className=' ms-5  btn btn-secondary '>Request Appointment</button>

           </div>
        </div>
    );
};

export default Service;