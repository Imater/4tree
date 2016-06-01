import React, { Component, PropTypes as pt } from 'react';

import styles from './TextAutoHeight.styl';

class TextAutoHeight extends Component {
  state = {
    rows: this.props.rows
  };

  static propTypes = {
    value: pt.string,
    onChange: pt.func,
    rows: pt.number
  };

  setTextareaHeight() {
    const { value } = this.props;
  }

  hasScrollbar(element) {
    return element.clientHeight < element.scrollHeight;
  }

  componentWillUpdate() {
    const self = this;
    setTimeout(() => {
      if (self.hasScrollbar(self.refs.textarea)) {
        self.setState({
          rows: self.state.rows + 1
        });
      }
    }, 0);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.value.length > newProps.value.length) {
      this.setState({
        rows: this.props.rows
      });
    }
  }

  render() {
    const { value, onChange } = this.props;

    return (
      <div>
        <textarea
          ref='textarea'
          rows={this.state.rows}
          value={value}
          onChange={event => {
            const newValue = event.target.value;
            onChange(newValue);
            this.setTextareaHeight();
          }}>
        </textarea>
      </div>
    );
  }
}

export default TextAutoHeight;
