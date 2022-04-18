import React from 'react';
import './Footer.css'
import google from '../../../image/logo/google.png'
import facebook from '../../../image/logo/facebook.png'
import Github from '../../../image/logo/github.png'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
     <div className='div-footer'>




            <footer  className="text-center">
                <div className='gattur'>
                    <img src={google} alt="" srcSet="" />
                    <img src={facebook} alt="" srcSet="" />
                    <img src={Github} alt="" srcset="" />
                </div>

        <p className="text-center mt-5 text-white"><small>Copyright @ {year} </small></p>
    </footer>
     </div>
    );
};

export default Footer;