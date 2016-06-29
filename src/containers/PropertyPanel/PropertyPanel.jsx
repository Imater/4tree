import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-async-connect';
import { Table, Tr, Td } from 'components/Table';
import SelectColor from 'components/SelectColor';
import Icons from 'containers/Icons';
import { set as setProperty } from 'redux/modules/nodeProperty';
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
  ({ nodes, selectColor, nodeProperty }) => ({ nodes, selectColor, nodeProperty }),
)
export default class PropertyPanel extends Component {
  static propTypes = {
    nodes: PropTypes.object,
    params: PropTypes.object,
    location: PropTypes.object,
    nodeProperty: PropTypes.object,
    selectColor: PropTypes.object,
    currentColorIndex: PropTypes.number,
    colors: PropTypes.array,
    dispatch: PropTypes.func
  };

  changeColor = (colorIndex) => () => {
    const { params: { id } } = this.props;
    this.props.dispatch(setProperty({
      id,
      propertyName: 'color',
      value: colorIndex,
    }));
  }

  handleChangeIcon = (iconName) => {
    const { params: { id } } = this.props;
    this.props.dispatch(setProperty({
      id,
      propertyName: 'icon',
      value: iconName,
    }));
  }

  render() {
    const { params: { id }, selectColor: { colors }, nodeProperty } = this.props;
    const currentColorIndex = nodeProperty[id] ? nodeProperty[id].color : undefined;
    const currentIcon = nodeProperty[id] ? nodeProperty[id].icon : undefined;

    return (
      <div className={styles.notes}>
        <Table>
          <Tr>
            <Td>
              <Icons value={currentIcon}
                onChange={this.handleChangeIcon}
              />
            </Td>
          </Tr>
          <Tr>
            <Td>
              <SelectColor
                colors={colors}
                value={currentColorIndex}
                onChange={this.changeColor}
              />
            </Td>
          </Tr>
        </Table>
      </div>
    );
  }
}

