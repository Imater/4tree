import React from 'react';

import styles from './Accordion.styl';

const Accordion = ({ items, openedItems, onClick }) => {
  return (
    <ul className={styles.accordion}>

      {items.map((item, index) => {
        return (
          <li key={index}>

            <div
              className={openedItems[index] ? styles.titleOpened : styles.title}
              onClick={() => onClick(index)}
            >
              {item.title}
            </div>

            <div
              className={openedItems[index] ? styles.contentOpened : styles.content}
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
