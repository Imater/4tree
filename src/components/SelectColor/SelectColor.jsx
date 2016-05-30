import React, { Component} from 'react';

import styles from './SelectColor.styl';

class SelectColor extends Component {
  state = {
    isClicked: false
  };
  render() {
    return (
      <div className={styles.select}>
      </div>
    );
  }
}

export default SelectColor;
