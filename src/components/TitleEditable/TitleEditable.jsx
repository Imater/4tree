import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styles from './TitleEditable.styl';

class TitleEditable extends Component {
state = {
  isEdit: false
};

componentDidUpdate() {
  const input = ReactDOM.findDOMNode(this.refs.myInput);
  if (input) {
    input.focus();
  }
}

render() {
  const { isEdit } = this.state;
  return (
this.state.isEdit ? (
<input
ref="myInput"
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
