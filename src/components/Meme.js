import React from 'react';
import memeimg from '../images/memeimg.png';

const Meme = () => {
  // Fetch Memes and store it in an array
  // Use useEffect to get Memes array from https://api.imgflip.com/get_memes

  const [memesData, setMemesData] = React.useState([]);

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setMemesData(data.data.memes));
  }, []);

  //console.log(memesData);

  // Get a random meme when button is clicked
  // DO NOT use Array.map since you dont need an Array back. You just need a single array item
  const randomMemeGenerator = () => {
    const randMeme = Math.floor(Math.random() * memesData.length);
    const imgUrl = memesData[randMeme].url;
    console.log(imgUrl);
  };

  const handleClick = () => {
    randomMemeGenerator();
  };

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
        <button onClick={handleClick}>Get a new meme image ⚠️</button>
      </div>
      <img className='meme--image' src={memeimg} />
    </div>
  );
};

export default Meme;
