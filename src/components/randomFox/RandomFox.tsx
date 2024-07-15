import React, { useEffect, useState } from 'react';

interface IFoxData {
  image: string;
}

function RandomFox() {
  const [foxImage, setFoxImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchFoxImage = async () => {
      try {
        const response = await fetch('https://randomfox.ca/floof/');
        const data: IFoxData = await response.json();
        setFoxImage(data.image);
      } catch (error) {
        console.error('Error fetching fox image:', error);
      }
    };

    fetchFoxImage();
  }, []);

  return (
    <div>
      <h2>Random Fox Image</h2>
      {foxImage ? (
        <img src={foxImage} alt="Random Fox" width={300} height={200} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default RandomFox;