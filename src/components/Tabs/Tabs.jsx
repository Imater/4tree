import React, { Component, PropTypes} from 'react';
import styles from './Tabs.styl';

class Tabs extends Component {
  static propTypes = {
    tabs: PropTypes.array,
    value: PropTypes.number,
    onChange: PropTypes.func
  };

  renderTabs = (item, key) => {
    const { value, onChange } = this.props;
    const { tabsItem, active } = styles;
    return (
        <li
             key={key}
             className={key === value ? active : tabsItem}
             onClick={onChange(key)}
         >
            {item}
        </li>
    );
  };

  render() {
    const { tabs } = this.props;
    return (
    <ul className={styles.tabs}>
        {tabs.map(this.renderTabs)}
    </ul>
    );
  }
}

export default Tabs;
