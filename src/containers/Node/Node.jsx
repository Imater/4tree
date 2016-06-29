import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { routeActions } from 'react-router-redux';
import { expand } from 'redux/modules/nodeState';
import Icon from 'components/Icon';

import styles from './Node.styl';

@connect(
  ({ nodes, nodeState, nodeProperty, selectColor }) => ({ nodes, nodeState, nodeProperty, selectColor }),
)
class Node extends Component {
  static propTypes = {
    nodes: PropTypes.object,
    nodeState: PropTypes.object,
    nodeProperty: PropTypes.object,
    nodeStateId: PropTypes.string,
    selectColor: PropTypes.object,
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
    const { nodes, nodeState, parentId, nodeStateId, dispatch, selectColor, selectColor: { colors }, nodeProperty } = this.props;
    const nodesArray = Object.keys(nodes.data.nodes).map(keyName => (
      nodes.data.nodes[keyName]
    ));
    const childNodes = nodesArray.filter(item => item.parentId === parentId);
    const node = nodesArray.find(item => item.id === parentId);
    const currentNodeState = !!nodeState[nodeStateId] && nodeState[nodeStateId][node.id]
      ? nodeState[nodeStateId][node.id]
      : {};

    const currentColorIndex = nodeProperty[node.id] ? nodeProperty[node.id].color : undefined;
    const color = colors[currentColorIndex];
    const icon = nodeProperty[node.id] ? nodeProperty[node.id].icon : 'circle';

    return (
      <li className={styles.node}>
        <div className={styles.arrow}>
          {
            !!childNodes.length &&
              <i
                className={`fa ${currentNodeState.expanded ? 'fa-caret-down' : 'fa-caret-right'}`}
                onClick={this.expand(node.id)}
              />
          }
        </div>
        {
            <div
              className={styles.box}
              style={{
                backgroundColor: color,
              }}
            >
              <Icon name={icon} />
            </div>
        }
        <Link to={{
          pathname: `/notes/${node.id}`,
        }}>
          <span className={styles.title}>
            { node.title }
          </span>
        </Link>
        {
          currentNodeState.expanded &&
            <ul className={styles.list}>
              {
                childNodes.map((item, key) => {
                  return (
                    <Node
                      nodeState={nodeState}
                      dispatch={dispatch}
                      selectColor={selectColor}
                      nodeProperty={nodeProperty}
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
