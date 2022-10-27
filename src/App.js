import React from 'react';

import './index.css';
import { useState } from 'react';
import { useEffect } from 'react';
import ImageCard from './components/ImageCard';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');


useEffect(()=>{
  fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}=${term}&image_type=photo&pretty=true`)
  .then(res => res.json())
  .then(data => {
    setImages(data.hits)
    setIsLoading(false)
  }
    )
  .catch(err => console.log(err))
}, []);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4 mx-auto">
        {images.map((image) => { return(
          <ImageCard key={image.id} image={image}/>
        )})}
      </div>
    </div>
  );
}

export default App;
