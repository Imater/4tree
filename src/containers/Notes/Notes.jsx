import React, { Component} from 'react';

import styles from './Notes.styl';

class Notes extends Component {
  state = {
    isClicked: false
  };
  render() {
    return (
      <div className={styles.notes}>
        <h1>
          Notes will be here
        </h1>
        <span
          onClick={() => {
            this.setState({
              isClicked: !this.state.isClicked
            });
          }}
        >ClickMe</span>
        {
          this.state.isClicked &&
            <div>I am clicked!!!</div>
        }
      </div>
    );
  }
}

export default Notes;
