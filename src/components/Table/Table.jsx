import React, {PropTypes as pt} from 'react';
import classNames from 'classnames';
import path from 'ramda/src/path';

import styles from './Table.styl';

const readStyle = key => path([key]);
const component = styleReader => ({children, className, width}) => (
  <div className={classNames({
    [styleReader(styles)]: true,
    [className]: className
  })}
    style={{
      width: width
    }}
  >
    {children}
  </div>
);

export const Table = component(readStyle('table'));
export const Tr = component(readStyle('tr'));
export const Td = component(readStyle('td'));

const propTypes = {
  children: pt.oneOfType([pt.node, pt.arrayOf(pt.node)]),
  width: pt.oneOfType([pt.number, pt.string]),
  className: pt.string
};

Table.propTypes = propTypes;

Tr.propTypes = propTypes;

Td.propTypes = propTypes;
