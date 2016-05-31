import React, { Component } from 'react';

import styles from './TitleEditable.styl';

class TitleEditable extends Component {
state = {
  isEdit: false
};

render() {
  const { isEdit } = this.state;
  return (
this.state.isEdit ? (
<input
onBlur = { () => {
  this.setState({
    isEdit: !isEdit
  });
}
}
/>
) : (
<div
onClick={() => {
  this.setState({
    isEdit: !isEdit
  });
}}
>
Some Title
</div>
)
);
}
}

export default TitleEditable;
