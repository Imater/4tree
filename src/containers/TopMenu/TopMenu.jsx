import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './TopMenu.styl';

class TopMenu extends Component {
  renderMenuItem = (item, key) => {
    return (
      <li key={key} className={styles.menuItem}>
        <Link to={item.link} activeClassName={styles.active}>
          {item.title}
        </Link>
      </li>
    );
  };
  render() {
    const items = [
      {
        link: '/',
        title: 'Home',
      },
      {
        link: 'tasks',
        title: 'Tasks',
      },
      {
        link: 'notes',
        title: 'Notes',
      },
    ];
    return (
      <div className={styles.topMenu}>
        <ul>
          {
            items.map(this.renderMenuItem)
          }
        </ul>
      </div>
    );
  }
}

export default TopMenu;
