import React, { Component, PropTypes as pt} from 'react';

import styles from './SelectColor.styl';

class SelectColor extends Component {
  static propTypes = {
    colors: pt.array,
    value: pt.number,
    onChange: pt.func
  };

  renderColor = (colors) => {
    return colors.map(
      color => <div className={styles.color} style={{backgroundColor: color}}></div>
    );
  };

  render() {
    const colors = this.props.colors;
    return (
      <div className={styles.selectColor}>
        <div className={styles.colorBox}>
          {this.renderColor(colors)}
        </div>
      </div>
    );
  }
}

export default SelectColor;
