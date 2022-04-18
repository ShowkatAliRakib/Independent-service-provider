import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
     <div className='div-footer'>




            <footer  className="text-center">

        <p className="text-center mt-5 text-white"><small>Copyright @ {year} </small></p>
    </footer>
     </div>
    );
};

export default Footer;