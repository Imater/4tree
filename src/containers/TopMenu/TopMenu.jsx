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
        title: 'Home',
        link: '/',
      },
      {
        title: 'Tasks',
        link: 'tasks',
      },
      {
        title: 'Notes',
        link: 'notes',
      },
      {
        title: 'Components',
        link: 'components',
      },
      {
        title: 'DropDownTitle',
        link: 'dropDownTitle'
      }
    ];
    return (
      <div className={styles.topMenu}>
        <ul style={{
          background: '#AAA'
        }}>
          {
            items.map(this.renderMenuItem)
          }
        </ul>
      </div>
    );
  }
}

export default TopMenu;
