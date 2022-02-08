import React from 'react';
import trollFace from '../images/troll-face.png';

const Header = () => {
  return (
    <div className='header--container'>
      <img src={trollFace} />
      <h2>Meme Generator</h2>
      <h4>React Course - Project 3</h4>
    </div>
  );
};

export default Header;
