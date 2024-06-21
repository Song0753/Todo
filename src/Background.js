import React, { useEffect, useState } from 'react';
import styles from './Background.module.css';

const images = [
    `/backgrounds/image1.jpg`,
    `/backgrounds/image2.jpg`,
    `/backgrounds/image3.jpg`,
];

function Background() {
    const [backgroundImage, setBackgroundImage] = useState('');
  
    useEffect(() => {
      console.log('useEffect called'); // 디버그 메시지 추가
  
      const setRandomBackgroundImage = () => {
        const randomIndex = Math.floor(Math.random() * images.length);
        const selectedImage = images[randomIndex];
        setBackgroundImage(selectedImage);
        console.log('New background image set:', selectedImage);
      };
  
      setRandomBackgroundImage();
  
      const interval = setInterval(setRandomBackgroundImage, 5000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {backgroundImage && <p>Current background image: {backgroundImage}</p>}
      </div>
    );
  }

export default Background;