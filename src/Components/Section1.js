import React from 'react';
import '../css/Section1.css';

function Section1() {
    return (
        <div className="bakery-ad">
      <div className="overlay">
        <img src="/Images/logo1.png" alt="Logo" className="logo" />
        <h1 className='bakery-ad-h1'>LOOKING FOR PERFECTLY BAKED GOODS?</h1>
        <p className='bakery-ad-p'>We got you!</p>
      </div>
    </div>
    );
}

export default Section1;