import React, { Component} from 'react';
import Helmet from 'react-helmet';

import styles from './Home.styl';

class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <Helmet title='Home'/>
        <h2>Hello!</h2>
      </div>
    );
  }
}

export default Home;
