import React from 'react';
import memeimg from '../images/memeimg.png';

const Meme = () => {
  // Fetch Memes and store it in an array
  // Use useEffect to get Memes array from https://api.imgflip.com/get_memes

  const [memesData, setMemesData] = React.useState([]);
  //const [memesImage, setMemesImage] = React.useState('');
  const [formData, setFormData] = React.useState({
    topText: '',
    bottomText: '',
    url: '',
  });

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
    setFormData((prevState) => ({
      ...prevState,
      url: imgUrl,
    }));
  };

  const handleClick = () => {
    randomMemeGenerator();
  };

  const handleChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  console.log(formData);

  return (
    <main className='meme--container'>
      <div className='meme--input'>
        <input
          className='input--top'
          type='text'
          placeholder='Top Text'
          name='topText'
          value={formData.topText}
          onChange={handleChange}
        />
        <input
          className='input--bottom'
          type='text'
          placeholder='Bottom Text'
          name='bottomText'
          value={formData.bottomText}
          onChange={handleChange}
        />
      </div>
      <div className='meme--button'>
        <button onClick={handleClick}>Get a new meme image ⚠️</button>
      </div>
      <div className='meme--image--container'>
        <img className='meme--image' src={formData.url} />
        <h2 className='top--text'>{formData.topText}</h2>
        <h2 className='bottom--text'>{formData.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
