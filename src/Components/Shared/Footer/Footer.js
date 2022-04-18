import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
     <div className='bg-dark'>




            <footer  className="text-center mt-5 p-5">

        <p className="text-center mt-5 text-white"><small>Copyright @ {year} </small></p>
    </footer>
     </div>
    );
};

export default Footer;