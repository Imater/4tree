import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { asyncConnect } from 'redux-async-connect';

import { loadSettings, isLoaded as isSettingsLoaded } from 'redux/modules/settings';
import config from 'config';
import TopMenu from 'containers/TopMenu';

import styles from './App.styl';

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];

    // hack, without it loop not work. need one call of any action
    dispatch({
      type: ''
    });

    if (!isSettingsLoaded(getState())) {
      promises.push(dispatch(loadSettings()));
    }

    return Promise.all(promises);
  }
}])
@connect(
  ({ settings }) => ({ settings }),
)
class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    settings: PropTypes.object,
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentDidMount() {
    document.body.style.display = 'block';
  }

  render() {
    return (
      <div className={styles.app}>
        <Helmet {...config.app.head}/>
        <TopMenu />
        {this.props.children}
      </div>
    );
  }
}

export default App;
