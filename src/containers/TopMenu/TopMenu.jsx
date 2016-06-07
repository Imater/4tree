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
        title: 'SelectColor',
        link: 'selectcolor',
      },
      {
        title: 'DropDownTitle',
        link: 'dropDownTitle'
      },
      {
        title: 'TitleEditable',
        link: 'titleEditable',
      },
      {
        title: 'IconTabs',
        link: 'iconTabs'
      },
      {
        title: 'Accordion',
        link: 'accordion',
      },
      {
        title: 'Loader',
        link: 'Loader'
      },
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
