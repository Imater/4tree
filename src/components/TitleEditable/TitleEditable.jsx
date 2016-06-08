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
    if (this.myInput) this.myInput.focus();
  }

  render() {
    const { value } = this.props;
    const { isEdit } = this.state;
    return (
      isEdit ? (
        <input className={styles.input}
          onChange={this.onTextChange}
          ref={(ref) => this.myInput = ref}
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
