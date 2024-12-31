import React, { useEffect, useState } from 'react';

const LazyImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
  }, [src]);

  return isLoaded ? <img src={src} alt={alt} /> : <div>Loading...</div>;
};

export default LazyImage;
