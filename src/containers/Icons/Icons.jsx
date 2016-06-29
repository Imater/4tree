import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import Icon from 'components/Icon';
import styles from './Icons.styl';

@connect(({iconsStore}) => ({icons: iconsStore.icons || []}))
class Icons extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string,
    icons: PropTypes.array
  };

  handleClick = (iconName) => () => {
    const { onChange } = this.props;
    if (typeof onChange !== 'function') {
      return;
    }
    onChange(iconName);
  };

  renderIcon = (icon, key) => {
    const { value } = this.props;
    return (
      <li
        className={`${icon.name === value ? styles.iconItemActive : styles.iconItem}`}
        onClick={this.handleClick(icon.name)}
        key={key}>
        <Icon name={icon.name} />
      </li>
    );
  }

  render() {
    const { icons } = this.props;
    return (
      <div className={styles.icons}>
        <ul>
          {
            icons.map(this.renderIcon)
          }
        </ul>
      </div>
    );
  }
}

export default Icons;
