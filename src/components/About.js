
import React from 'react';
import Boc from './Boc'; 
import food1 from '../images/food1.jpg';
import food2 from '../images/food2.jpg'; 

function About() {
  return (
    <div id='projects'>
      <div className='s-heading'>
        <h1>Food is art</h1>
        <p>Enjoy our yums Recipes</p>
      </div>
      <div className='b-container'>
        <Boc image={food1} alte='food' button='About us'/>
        <Boc image={food2} alte='about' button='Contact'/>
      </div>
    </div>
  );
}

export default About;
