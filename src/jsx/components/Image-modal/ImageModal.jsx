import Modal from 'react-modal';
import { RxExit } from 'react-icons/rx';
import styles from './ImageModal.module.css';

const ImageModal = ({ isOpen, image, onCloseClick }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onCloseClick}
        overlayClassName={styles.backdrop}
        className={styles.modal}
      >
        <div className={styles.modalcontainer}>
          <button className={styles.closeButton} onClick={onCloseClick}>
            <RxExit />
          </button>
          {image && (
            <>
              <div className={styles.imgContainer}>
                <img
                  src={image.urls.regular}
                  alt={image.description}
                  className={styles.image}
                />
              </div>
              <p className={styles.text}>Author: {image.user.username}</p>
              <p className={styles.text}>Likes: {image.likes} </p>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ImageModal;
