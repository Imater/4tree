import { connect } from 'react-redux';
import React, { Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import { setColorIndex } from 'redux/modules/selectColor';

import SelectColor from 'components/SelectColor/';

import TextAutoHeight from '../../components/TextAutoHeight/';
import styles from './SelectColorContainer.styl';

@connect(({selectColor}) => ({selectColor}))
class SelectColorContainer extends Component {
  static propTypes = {
    selectColor: PropTypes.object,
    currentColorIndex: PropTypes.number,
    colors: PropTypes.array,
    dispatch: PropTypes.func
  };

  state = {
    text: 'Sample Text'
  };

  changeColor = (colorIndex) => () => this.props.dispatch(setColorIndex(colorIndex));

  render() {
    const { colors, currentColorIndex } = this.props.selectColor;
    return (
      <div className={styles.home}>
        <Helmet title='SelectColor Container'/>
        <div className={styles.selectTitle}>Цвет:</div>
        <SelectColor
          colors={colors}
          value={currentColorIndex}
          onChange={this.changeColor}
        />

        <div className={styles.selectTitle}>Поле ввода:</div>
        <TextAutoHeight
          value={this.state.text}
          rows={3}
          onChange={(newText) => {
            this.setState({
              text: newText
            });
          }}
        />

      </div>
    );
  }
}

export default SelectColorContainer;
