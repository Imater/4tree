import React, { PropTypes as pt } from 'react';

const Icon = ({ name, className }) => (
  <i
    className={`${className || ''} fa fa-${name}`}
  />
);

Icon.propTypes = {
  name: pt.string,
  className: pt.string,
};

export default Icon;
