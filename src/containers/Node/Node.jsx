import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { routeActions } from 'react-router-redux';
import { expand } from 'redux/modules/nodeState';

import styles from './Node.styl';

@connect(
  ({ nodes, nodeState }) => ({ nodes, nodeState }),
)
class Node extends Component {
  static propTypes = {
    nodes: PropTypes.object,
    nodeState: PropTypes.object,
    nodeStateId: PropTypes.string,
    dispatch: PropTypes.func,
    parentId: PropTypes.string,
  };
  expand = (id) => () => {
    const { nodeState, nodeStateId, dispatch } = this.props;
    const currentNodeState = !!nodeState[nodeStateId] && nodeState[nodeStateId][id]
      ? nodeState[nodeStateId][id]
      : {};
    dispatch(expand({
      id,
      nodeStateId,
      expanded: !currentNodeState.expanded
    }));
  }
  render() {
    const { nodes, nodeState, parentId, nodeStateId, dispatch } = this.props;
    const nodesArray = Object.keys(nodes.data.nodes).map(keyName => (
      nodes.data.nodes[keyName]
    ));
    const childNodes = nodesArray.filter(item => item.parentId === parentId);
    const node = nodesArray.find(item => item.id === parentId);
    const currentNodeState = !!nodeState[nodeStateId] && nodeState[nodeStateId][node.id]
      ? nodeState[nodeStateId][node.id]
      : {};

    return (
      <li className={styles.notes}>
        {
          !!childNodes.length &&
            <button
              onClick={this.expand(node.id)}
            >
              >
            </button>
        }
        <Link to={{
          pathname: `/notes/${node.id}`,
        }}>
          <span>{node.title}</span>
        </Link>
        {
          currentNodeState.expanded &&
            <ul>
              {
                childNodes.map((item, key) => {
                  return (
                    <Node
                      nodeState={nodeState}
                      dispatch={dispatch}
                      nodeStateId={nodeStateId}
                      nodes={nodes}
                      key={key}
                      parentId={item.id}
                    />
                  );
                })
              }
        </ul>
        }
      </li>
    );
  }
}

export default Node;
