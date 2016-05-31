import React, { Component } from 'react';
import { default as EditableTitle } from 'components/TitleEditable';

export default class TitleEditable extends Component {
  state = {
    isEdit: false
  };

  render() {
    return (
      <div>
        <EditableTitle />
      </div>
    );
  }
}
