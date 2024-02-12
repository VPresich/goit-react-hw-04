import { InfinitySpin } from 'react-loader-spinner';

import styles from './Loader.module.css';

const Loader = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <InfinitySpin
          className={styles.loader}
          visible={isLoading}
          ariaLabel="Loading"
        />
      )}
    </>
  );
};

export default Loader;
