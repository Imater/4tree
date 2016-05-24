import React, { Component} from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

import styles from './Home.styl';

class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <Helmet title='Home'/>
        <h2>Hello 4tree!</h2>
        <ul>
          <li>
            <Link to={`tasks`}>Tasks</Link>
          </li>
          <li>
            <Link to={`notes`}>Notes</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
