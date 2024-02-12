import { useState, useEffect } from 'react';
import { RxExit } from 'react-icons/rx';
import clsx from 'clsx';
import Modal from 'react-modal';

import SearchBar from './search-bar/SearchBar';
import ErrorMessage from './error-message/ErrorMessage';
import ImageGallery from './image-gallery/ImageGallery';
import Loader from './loader/Loader';
import LoadMoreBtn from './loadmore-btn/LoadMoreBtn';

import { fetchData } from '../api/fetch-data';
// import { CustomModal } from './custom-modal/CustomModal';

import styles from './App.module.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currPage, setCurrPage] = useState(0);
  const [hasMorePages, setHasMorePages] = useState(false);
  const [filter, setFilter] = useState('');

  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  const updateImages = async (strFilter, page) => {
    try {
      setError(false);
      setLoading(true);
      const data = await fetchData(strFilter, page);
      if (data.results.length > 0) {
        setItems(prevItems => [...prevItems, ...data.results]);
        setCurrPage(page);
        setHasMorePages(page >= data.total_pages ? false : true);
      } else {
        setError(true);
        setHasMorePages(false);
      }
    } catch (error) {
      setError(true);
      setHasMorePages(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = strFilter => {
    setFilter(strFilter);
    setItems([]);
    setCurrPage(0);
    setHasMorePages(false);
    updateImages(strFilter, 1);
  };

  const handleMore = () => updateImages(filter, currPage + 1);

  const openModal = image => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <div className={clsx(styles.content, styles.section)}>
        <ErrorMessage isError={error} />
        <ImageGallery images={items} openModal={openModal} />
        <Loader isLoading={loading} />

        <LoadMoreBtn
          isVisible={hasMorePages && !loading}
          onClick={handleMore}
        ></LoadMoreBtn>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName={styles.backdrop}
        className={styles.modal}
      >
        <div className={styles.modalcontainer}>
          <button className={styles.closeButton} onClick={closeModal}>
            <RxExit />
          </button>
          {selectedImage && (
            <>
              <div className={styles.imgContainer}>
                <img
                  src={selectedImage.urls.regular}
                  alt={selectedImage.description}
                  className={styles.image}
                />
              </div>
              <p className={styles.text}>
                Author: {selectedImage.user.username}
              </p>
              <p className={styles.text}>Likes: {selectedImage.likes} </p>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default App;
