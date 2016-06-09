import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-async-connect';
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
@connect(
  ({ nodes }) => ({ nodes }),
)
class Notes extends Component {
  static propTypes = {
    nodes: PropTypes.object,
  };
  state = {
    isClicked: false
  };
  renderNode = (node, key) => {
    return (
      <li key={key}>
        { node.title }
      </li>
    );
  }
  render() {
    const { nodes } = this.props;
    const nodesArray = Object.keys(nodes.data.nodes).map(keyName => (
      nodes.data.nodes[keyName]
    ));
    console.info(nodesArray);

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
        <ul>
          {nodesArray.map(this.renderNode)}
        </ul>
      </div>
    );
  }
}

export default Notes;
