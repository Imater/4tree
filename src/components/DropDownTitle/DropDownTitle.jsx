import React from 'react';
import styles from './DropDownTitle.styl';

const DropDownTitle = ({value, onClick}) => {
  return (
      <div className={styles.dropdown} onClick={onClick} >
        Dropdowntext
        <div
          className={styles.dropdownTriangle + (value ? ' ' : ' ' + styles.rotated)}

        >
        </div>
      </div>
  );
};

export default DropDownTitle;
