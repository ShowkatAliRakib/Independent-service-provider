import React from 'react';
import './Banner.css'
import doctor from '../../../image/doctor.png'

const Banner = () => {
  return (
    <div >
      <img style={{height:500}} className='w-100' src={doctor} alt="" srcSet="" />
    </div>
  );
};

export default Banner;