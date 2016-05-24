import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './Tasks.styl';

class Tasks extends Component {
  render() {
    return (
      <div className={styles.tasks}>
        <Link to={`/`}>Back</Link>
        <h1>
          Tasks will be here
        </h1>
      </div>
    );
  }
}

export default Tasks;
