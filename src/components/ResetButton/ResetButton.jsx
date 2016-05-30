import React, { Component, PropTypes as pt} from 'react';

import styles from './ResetButton.styl';

class ResetButton extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <button className={styles.button}
              onClick={onChange(undefined)}
      ></button>
    );
  }
}

export default ResetButton;
