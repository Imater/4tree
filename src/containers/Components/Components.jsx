import React, { Component} from 'react';
import Helmet from 'react-helmet';
import SelectColor from '../../components/SelectColor/';
import TextAutoHeight from '../../components/TextAutoHeight/';
import styles from './Components.styl';

class Components extends Component {
  state = {
    currentColorIndex: 0,
    text: 'Sample Text'
  };
  changeColor = (colorIndex) => () => {
    this.setState({
      currentColorIndex: colorIndex
    });
  };
  render() {
    const colors = ['#1abc9c', '#40d47e', '#3498db', '#9b59b6', '#e74c3c', '#ecf0f1', '#f1c40f', '#34495e'];
    return (
      <div className={styles.home}>
        <Helmet title='Components'/>
        <div className={styles.selectTitle}>Цвет:</div>
        <SelectColor
          colors={colors}
          value={this.state.currentColorIndex}
          onChange={this.changeColor}/>

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

export default Components;
