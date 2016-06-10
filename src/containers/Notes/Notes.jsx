import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-async-connect';
import { load as loadNodes, isLoaded as isNodesLoaded } from 'redux/modules/nodes';
import { Link } from 'react-router';
import { routeActions } from 'react-router-redux';

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
    children: PropTypes.object,
    dispatch: PropTypes.func,
  };
  state = {
    isClicked: false
  };
  renderNode = (node, key) => {
    const { dispatch } = this.props;
    const makeLink = id => ({
      pathname: `/notes/${id}`,
      query: {
        hi: id,
        hello: id + '-test',
      },
      hash: 'i-am-hash-man',
      state: {
        iAmFrom: 'Heaven'
      }
    });
    const id = node.id;
    return (
      <li key={key}>
        <span onClick={() => {
          dispatch(routeActions.push(makeLink(id)));
        }}>[go-to] </span>
        <Link to={makeLink(id)}>
          { node.title }
        </Link>
      </li>
    );
  }
  render() {
    const { nodes } = this.props;
    const nodesArray = Object.keys(nodes.data.nodes).map(keyName => (
      nodes.data.nodes[keyName]
    ));

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
