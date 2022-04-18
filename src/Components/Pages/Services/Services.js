import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices]=useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div>
            
            <div>
                
            <h1  className='text-center'>My Services</h1>
            <div>

            </div>

            </div>
        </div>
    );
};

export default Services;