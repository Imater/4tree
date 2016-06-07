import React from 'react';
import styles from './Loader.styl';

const Loader = ({value, onClick}) => {
  return (
      <div className={value ? styles.loaderActive : styles.loader}
          onClick={onClick}>
      </div>
  );
};

export default Loader;
