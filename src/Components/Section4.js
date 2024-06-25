import React from 'react';
import '../css/Section4.css';

function Section4() {
    return (
        <div className="section4">
            <h1 className='section4__header'>CHERVET IN THE NEWS</h1>
            <div className='section4__items'>
                <div className='section4__items__part section4__sec1'>

                    <h1>Quark Sweets <br/>Digest</h1>
                    <div class="separator">✻</div>

                    <p>"Delicious treats that melt in you mouth! A backry beyond compare." </p>
                </div>
                <div className='section4__items__part section4__sec2'>
                    <h1>Sweevory <br/>Magazine</h1>
                    <div class="separator">✻</div>

                    <p>"Every bits is a moment of purte delight. This backery is a hidden gen!"</p>
                </div>
                <div className='section4__items__part sectio4__section4'>
                    <h1>Accrington <br/>Daily</h1>
                    <div class="separator">✻</div>

                    <p>"From classic to c reative, their pastries are a true masterpiece. A backery experience like no other."</p>
                </div>
            </div>
        </div>
    );
}

export default Section4;