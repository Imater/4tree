import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import waterfall from 'promise-waterfall';
import { asyncConnect } from 'redux-async-connect';

import styles from './Tasks.styl';

import { load as loadTasks, setCheck, isLoaded as isTasksLoaded } from 'redux/modules/tasks';

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];

    // hack, without it loop not work. need one call of any action
    dispatch({
      type: ''
    });

    const waterfallPromises = [];
    waterfallPromises.push(() => new Promise((resolve, reject) => {
      console.info('timer started. Wait 10 sec');
      setTimeout(() => {
        console.info('time is completed. You loose pockemon.');
        resolve('secret token');
      }, 100);
    }));

    waterfallPromises.push((secretToken) => new Promise((resolve, reject) => {
      console.info('timer 2 started. Wait 5 sec', secretToken);
      setTimeout(() => {
        console.info('time 2 is completed. You found pockemon.');
        resolve('second secret token');
      }, 500);
    }));

    waterfallPromises.push((secretToken) => new Promise((resolve, reject) => {
      console.info('timer 3 started. Wait 10 sec', secretToken);
      setTimeout(() => {
        console.info('time 3 is completed. You found pockemon.');
        resolve();
      }, 1000);
    }));

    promises.push(waterfall(waterfallPromises));

    if (!isTasksLoaded(getState())) {
      promises.push(dispatch(loadTasks()));
    }

    return Promise.all(promises);
  }
}])
@connect(({tasks}) => ({ tasks }))
class Tasks extends Component {
  static propTypes = {
    tasks: PropTypes.object,
    dispatch: PropTypes.func
  };
  handleSetCheck = item => () => {
    const { dispatch } = this.props;
    const action = setCheck({
      id: item.id,
      checked: !item.checked,
    });
    console.info(action);
    dispatch(action);
  };
  renderTask = (item) => {
    return (
      <li key={item.id}>
        <input
          checked={item.checked}
          onChange={this.handleSetCheck(item)}
          type='checkbox'
        />
        {item.title}
      </li>
    );
  };
  render() {
    const { tasks: { tasks } } = this.props;
    const tasksArray = Object.keys(tasks).map((id) => (tasks[id]));
    return (
      <div className={styles.tasks}>
        <ul>
          { tasksArray.map(this.renderTask) }
        </ul>
      </div>
    );
  }
}

export default Tasks;
