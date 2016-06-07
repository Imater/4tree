import React, { Component} from 'react';
import Helmet from 'react-helmet';
import styles from './Home.styl';

class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <Helmet title='Home'/>
        <h2>Hello 4tree!</h2>
        <h3>We have home work now... till 01.06.2016</h3>
      </div>
    );
  }
}

export default Home;
