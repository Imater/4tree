import React, { Component, PropTypes as pt} from 'react';
import ResetButton from '../ResetButton/ResetButton';

import styles from './SelectColor.styl';

class SelectColor extends Component {
  static propTypes = {
    colors: pt.array,
    value: pt.number,
    onChange: pt.func
  };

  selectColorByValue = index => {
    const { value } = this.props;
    const { color, colorSelected } = styles;
    return index === value ? colorSelected : color;
  };

  renderColor = (color, index) => {
    return (
      <div className={this.selectColorByValue(index)}
           key={index}
           style={{backgroundColor: color}}
           onClick={this.props.onChange(index)}>
      </div>
    );
  };

  renderColors = (colors) => {
    return colors.map((color, index) => this.renderColor(color, index));
  };

  render() {
    const {colors, onChange} = this.props;
    return (
      <div className={styles.select}>
        <div className={styles.colorBox}>
          {this.renderColors(colors)}
        </div>
        <ResetButton onChange={onChange}/>
      </div>
    );
  }
}

export default SelectColor;
