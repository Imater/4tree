import React, { Component, PropTypes as pt} from 'react';
import ResetButton from '../ResetButton/ResetButton';

import styles from './SelectColor.styl';

class SelectColor extends Component {
  static propTypes = {
    colors: pt.array,
    value: pt.number,
    onChange: pt.func
  };

  selectColorByValue = index => index === this.props.value ? styles.colorSelected : styles.color;

  renderColor = (colors) => {
    return colors.map(
      (color, index) => {
        return (
          <div className={this.selectColorByValue(index)}
               style={{backgroundColor: color}}
               onClick={this.props.onChange(index)}
          ></div>
        );
      }
    );
  };

  render() {
    const {colors, onChange} = this.props;
    return (
      <div className={styles.selectColor}>
        <div className={styles.colorBox}>
          {this.renderColor(colors)}
          <ResetButton onChange={onChange}/>
        </div>
      </div>
    );
  }
}

export default SelectColor;
