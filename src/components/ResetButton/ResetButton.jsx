import React, { Component, PropTypes as pt} from 'react';

import styles from './ResetButton.styl';

class ResetButton extends Component {
  static propTypes = {
    onChange: pt.func
  };

  render() {
    return (
      <button className={styles.button}>`reset`</button>
    );
  }
}

export default ResetButton;
