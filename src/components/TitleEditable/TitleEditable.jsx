import React, { Component, PropTypes } from 'react';

import styles from './TitleEditable.styl';

class TitleEditable extends Component {

  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
  };

  state = {
    isEdit: false
  };

  onTextChange = (event) => {
    const { onChange } = this.props;
    const newValue = event.target.value;
    onChange(newValue);
  }

  startEdit = () => {
    this.setState({
      isEdit: true
    });
  }

  componentDidUpdate = () => {
    const inputElement = this.refs.myInput;
    inputElement.focus();
  }

  render() {
    const { value } = this.props;
    const { isEdit } = this.state;
    return (
      isEdit ? (
        <input className={styles.input}
          onChange={this.onTextChange}
          ref='myInput'
          value={value}
          onBlur = { () => {
            this.setState({
              isEdit: false
            });
          }
          }
        />
      ) : (
        <div
          onClick={this.startEdit}
        >
          {value}
        </div>
      )
    );
  }
}

export default TitleEditable;
