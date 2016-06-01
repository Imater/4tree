import React, { Component} from 'react';
import Tabs from '../../components/Tabs/';
import Helmet from 'react-helmet';
import styles from './IconTabs.styl';

class IconTabs extends Component {
  state = {
    value: 2
  };

  onChange = (newValue) => () => {
    const newState = {
      ...this.state
    };

    newState.value = newValue;
    this.setState(newState);
  };

  render() {
    const tabs = ['Оформление', 'Проект', 'Обзор', 'Счетчики', 'Поделиться'];
    const {value} = this.state;
    return (
      <div className={styles.tabs}>
        <Helmet title='IconTabs'/>
        <Tabs
         tabs={tabs}
         value={value}
         onChange={this.onChange}
        />
      </div>
    );
  }
}

export default IconTabs;
