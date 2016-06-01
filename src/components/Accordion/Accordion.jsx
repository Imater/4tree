import React from 'react';

import styles from './Accordion.styl';

const Accordion = ({ items, openedItems, onClick }) => {
  return (
    <ul className={styles.accordion}>
      {items.map((item, index) => {
        return (
          <li className={styles.item} key={index}>
            <div
              className={openedItems[index] ? styles.titleOpened : styles.title}
              onClick={() => {
                onClick(index);
              }}
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
