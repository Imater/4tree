import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-async-connect';
import { load as loadNodes, isLoaded as isNodesLoaded } from 'redux/modules/nodes';

import styles from './PropertyPanel.styl';

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
@connect(
  ({ nodes }) => ({ nodes }),
)
export default class PropertyPanel extends Component {
  static propTypes = {
    nodes: PropTypes.object,
    params: PropTypes.object,
    location: PropTypes.object,
  };
  render() {
    const { nodes, params: { id }, location: { query, hash, state } } = this.props;

    return (
      <div className={styles.notes}>
        <h1>
          {id}
        </h1>
        <h2>
          query.hello: {query.hello}
        </h2>
        <h2>
          query.hi: {query.hi}
        </h2>
        <h3>
          hash: {hash}
        </h3>
      </div>
    );
  }
}

