import React, { Component} from 'react';
import { Link } from 'react-router';

import styles from './Notes.styl';

class Notes extends Component {
  render() {
    return (
      <div className={styles.notes}>
        <Link to={`/`}>Back</Link>
        <h1>
          Notes will be here
        </h1>
      </div>
    );
  }
}

export default Notes;
