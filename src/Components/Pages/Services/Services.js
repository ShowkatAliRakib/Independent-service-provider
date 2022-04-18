import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices]=useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div>
            
            <div id='services'>
                
            <h1  className='text-center'>My Services</h1>
            <div className="container relative">

          
                    {
                        services.map(service=> <Service key={service.id} service={service} ></Service> )
                    }
                      </div>
            </div>
        </div>
    );
};

export default Services;