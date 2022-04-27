import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Services.css"



const Services = () => {

    const[services, setservices ]= useState([])
 
    useEffect(()=>{
         fetch('services.json')
         .then(res=>res.json())
         .then(data => setservices(data))
    },[])



    return (
        <div id="services" className="container">
          <div className="row">
          <h2 className='services-tittle'> Our Services</h2>
          <div className='services-container' >
         
           {
               services.map(service=> <Service
               key={service.id}
               service={service}
               
               ></Service>)
           }
          </div>
          </div>
        </div>
    );
};

export default Services;