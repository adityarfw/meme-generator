import React from 'react';
import memeimg from '../images/memeimg.png';

const Meme = () => {
  return (
    <div className='meme--container'>
      <div className='meme--input'>
        <input className='input--top' type='text' placeholder='Top Text' />
        <input
          className='input--bottom'
          type='text'
          placeholder='Bottom Text'
        />
      </div>
      <div className='meme--button'>
        <button>Get a new meme image ⚠️</button>
      </div>
      <img className='meme--image' src={memeimg} />
    </div>
  );
};

export default Meme;
