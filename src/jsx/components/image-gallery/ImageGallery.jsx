import { ImageCard } from './ImageCard';

import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, openModal }) => {
  const handleImageClick = event => {
    const clickedCard = event.target.closest('li');
    if (clickedCard) {
      const imageId = clickedCard.dataset.imageid;
      console.log('key', imageId);
      const clickedImageObj = images.find(image => image.id === imageId);
      if (clickedImageObj) {
        openModal(clickedImageObj);
      }
    }
  };
  return (
    <>
      {images.length > 0 && (
        <ul className={styles.gallery} onClick={handleImageClick}>
          {images.map(image => (
            <li key={image.id} data-imageid={image.id}>
              <ImageCard image={image} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ImageGallery;
