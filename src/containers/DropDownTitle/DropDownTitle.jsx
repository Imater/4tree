import React, { Component} from 'react';

import styles from './DropDownTitle.styl';


class DropDownTitle extends Component {

state = {
  isOpen: false
};

  render() {
    const isOpen = this.state.isOpen;
    return (
        <div
        className={styles.dropdown}
        onClick={() => {
          this.setState({
            isOpen: !isOpen
          });
        }}
        >Dropdowntext
        <div className={styles.dropdownTriangle + (isOpen ? ' ' : ' ' + styles.rotated)}></div>
        </div>
    );
  }
}

export default DropDownTitle;
