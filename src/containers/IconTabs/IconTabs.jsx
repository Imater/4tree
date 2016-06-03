import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import Tabs from '../../components/Tabs/';
import Helmet from 'react-helmet';
import styles from './IconTabs.styl';
import { setTabActiveIndex } from 'redux/modules/settings';

// @connect(({settings}) => ({settings}))
//
const mapStateToProps = (state) => {
  return {
    settings: state.settings,
    tabActiveIndex: state.settings.tabActiveIndex,
    tabs: state.settings.tabs,
    pathname: state.routing.location.pathname
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTabActiveIndexNew: (newValue, pathname) => (dispatch(setTabActiveIndex(newValue, pathname))),
    alertToMe: () => {
      setTimeout(() => {
        dispatch({
          type: 'DO YOU EXIST?',
          payload: {}
        });
      }, 3000);
    }

  };
};

@connect(mapStateToProps, mapDispatchToProps)
class IconTabs extends Component {
  static propTypes = {
    tabs: PropTypes.array,
    tabActiveIndex: PropTypes.number,
    dispatch: PropTypes.func,
    setTabActiveIndexNew: PropTypes.func,
    alertToMe: PropTypes.func,
    pathname: PropTypes.string,
  };

  onChange = (newValue) => () => {
    const { setTabActiveIndexNew, pathname } = this.props;
    // dispatch(setTabActiveIndex(newValue, pathname));
    setTabActiveIndexNew(newValue, pathname);
  };

  render() {
    const { tabActiveIndex, tabs, pathname } = this.props;
    console.info(this.props);
    return (
      <div className={styles.tabs}>
        <Helmet title='IconTabs'/>
        <Tabs
         tabs={tabs}
         value={tabActiveIndex}
         onChange={this.onChange}
        />
        <div onClick={this.props.alertToMe}>
          { pathname }
        </div>
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
