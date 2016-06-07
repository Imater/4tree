import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import Tabs from '../../components/Tabs/';
import Helmet from 'react-helmet';
import styles from './IconTabs.styl';
import { setTabActiveIndex } from 'redux/modules/iconTabs';

@connect(({iconTabs}) => ({iconTabs}))

class IconTabs extends Component {
  static propTypes = {
    iconTabs: PropTypes.object,
    dispatch: PropTypes.func,
    tabs: PropTypes.array
  };

  onChange = (newValue) => () => {
    const { dispatch } = this.props;
    dispatch(setTabActiveIndex(newValue));
  };

  render() {
    const { iconTabs: { tabActiveIndex, tabs } } = this.props;
    return (
      <div className={styles.tabs}>
        <Helmet title='IconTabs'/>
        <Tabs
         tabs={tabs}
         value={tabActiveIndex}
         onChange={this.onChange}
        />
        {
          tabActiveIndex === 0 &&
            (
              <div>
                оформление
              </div>
            )
        }
        {
          tabActiveIndex === 1 &&
            (
              <div>
                проект - страница
              </div>
            )
        }
      </div>
    );
  }
}

export default IconTabs;
