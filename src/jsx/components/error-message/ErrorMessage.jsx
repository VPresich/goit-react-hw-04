import { ERR_EMPTY_LOAD } from '../../notifications/constants';
import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ isError }) => {
  return isError && <p className={styles.empty}>{ERR_EMPTY_LOAD}</p>;
};

export default ErrorMessage;
