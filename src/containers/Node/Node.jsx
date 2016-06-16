import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { routeActions } from 'react-router-redux';

import styles from './Node.styl';

@connect(
  ({ nodes }) => ({ nodes }),
)
class Node extends Component {
  static propTypes = {
    nodes: PropTypes.object,
    dispatch: PropTypes.func,
    parentId: PropTypes.string,
  };
  render() {
    const { nodes, parentId } = this.props;
    const nodesArray = Object.keys(nodes.data.nodes).map(keyName => (
      nodes.data.nodes[keyName]
    ));
    const childNodes = nodesArray.filter(item => item.parentId === parentId);
    const node = nodesArray.find(item => item.id === parentId);

    return (
      <li className={styles.notes}>
        <Link to={{
          pathname: `/notes/${node.id}`,
        }}>
          <span>{node.title}</span>
        </Link>
        <ul>
          {
            childNodes.map((item, key) => {
              return (
                <Node
                  nodes={nodes}
                  key={key}
                  parentId={item.id}
                />
              );
            })
          }
        </ul>
      </li>
    );
  }
}

export default Node;
