import React from 'react';
import '../css/Section3.css';

function Section3() {
    return (
        <div className="pastry-ad">
        <div className="text-section">
          <p className="asterisk">✻</p>
          <h1>PASTRY <br/> PERFECTION</h1>
          <p className='text-section-p'>
            Discover deliciousness at Chevert Bakery. Imagine biting into a freshly baked treat that's made with love and handled with care.
          </p>
          <p className='text-section-p'>
            No need to imagine, because our pastries are baked, packed, and delivered on the day they’re made, so you’re assured of oven-fresh goodness.
          </p>
          <p className='text-section-p'>
            Now that’s perfection.
          </p>
        </div>
        <div className="image-section">
          <img src="/Images/image3.png" alt="Pastry" />
        </div>
      </div>
    );
}

export default Section3;