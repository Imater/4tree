import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';

import Node from 'containers/Node';
import { load as loadNodes, isLoaded as isNodesLoaded } from 'redux/modules/nodes';

import styles from './Notes.styl';

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];

    // hack, without it loop not work. need one call of any action
    dispatch({
      type: ''
    });

    if (!isNodesLoaded(getState())) {
      promises.push(dispatch(loadNodes()));
    }

    return Promise.all(promises);
  }
}])
class Notes extends Component {
  static propTypes = {
    children: PropTypes.object,
  };
  render() {
    return (
      <div className={styles.notes}>
        <Node nodeStateId={'#1'} parentId={'0'} />
        <div style={{
          background: '#EEE',
          padding: 20
        }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Notes;
