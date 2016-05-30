import React, { Component} from 'react';
import Helmet from 'react-helmet';
import SelectColor from '../../components/SelectColor/';
import styles from './Components.styl';

class Components extends Component {
  state = {
    currentColorIndex: 0
  };
  changeColor = (colorIndex) => () => {
    console.log(colorIndex);
    this.setState({
      currentColorIndex: colorIndex
    });
  };
  render() {
    return (
      <div className={styles.home}>
        <Helmet title='Components'/>
        <div className={styles.selectTitle}>Цвет:</div>
        <SelectColor
          colors={
            ['#1abc9c', '#40d47e', '#3498db', '#9b59b6', '#e74c3c', '#ecf0f1', '#f1c40f', '#34495e']
          }
          value={this.state.currentColorIndex}
          onChange={this.changeColor}/>
      </div>
    );
  }
}

export default Components;
