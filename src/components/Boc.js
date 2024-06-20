// Boc.js
import React from 'react';

function Boc(props) {
  return (
    <div className='s-box'>
      <div className='s-b-img'>
        <img src={props.image} alt={props.alte} />
      </div>
      <div className='s-b-text'>
        <p>
        if you like inspiring recipes and exciting food . Here you will find recipes for everything from drinks and breakfast to main. Some of these recipes I have been cooking for years, others have been created just for you.
        </p>
        <a href="#" className='cv-btn'>{props.button}</a>
      </div>
    </div>
  );
}

export default Boc;
