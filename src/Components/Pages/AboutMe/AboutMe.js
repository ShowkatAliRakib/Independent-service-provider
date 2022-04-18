import React from 'react';
import Rakib from '../../../image/me/Rakib.png'

const AboutMe = () => {
    return (
        <div className='d-flex p-5'>
            <div>
                <img className='w-50' src= {Rakib} alt="" srcset="" />
            </div>
            <div>
                <h1>আমার গোল বা স্বপ্ন</h1>
           <p>
           আমি একজন  ওয়েভ ডেভেলপার হতে চাই,,,  আমার স্বপ্ন একজন পোলস্টেক ডেভেলপার হওয়া এবং এটার জন্য আমি long time journey করতে প্রস্তুত
           </p>


            </div>
        </div>
    );
};

export default AboutMe;