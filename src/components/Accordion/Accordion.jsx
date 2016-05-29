import React from 'react';
import classNames from 'classnames';

import styles from './Accordion.styl';

const Accordion = ({ items, openedItems, handleClick }) => {
  return (
    <ul className={styles.accordion}>
      {items.map((item, index) => {
        return (
          <li className={styles.item}>
            <div
              className={classNames({
                [styles.title]: true,
                [styles.titleOpened]: openedItems[index]
              })}
              onClick={handleClick(index)}
            >
              {item.title}
            </div>
            <div
              className={styles.content}
              style={{
                display: openedItems[index] ? 'block' : 'none'
              }}
            >
              {item.content}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Accordion;
