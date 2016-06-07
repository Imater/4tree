import React, { Component } from 'react';
import { default as EditableTitle } from 'components/TitleEditable';

export default class TitleEditable extends Component {
  state = {
    value: 'sample text',
  };

  render() {
    return (
      <div>
        <EditableTitle
          value={this.state.value}
          onChange={(newValue) => {
            this.setState({
              value: newValue,
            });
          }}
        />
        <div>
          text: {this.state.value}
        </div>
      </div>
    );
  }
}
