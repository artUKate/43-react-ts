import React, { useEffect, useState } from 'react';
import styles from './randomFox.module.css'

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
    <div className={styles.container}>
      <h2 className={styles.title}>Random Fox Image</h2>
      {foxImage ? (
        <img className={styles.image} src={foxImage} alt="Random Fox" />
      ) : (
        <p className={styles.loading}>Loading...</p>
      )}
    </div>
  );
}
export default RandomFox;