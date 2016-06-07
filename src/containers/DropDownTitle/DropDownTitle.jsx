import React, { Component} from 'react';
import { default as MyDropDownTitle } from 'components/DropDownTitle';

class DropDownTitle extends Component {
  state = {
    isOpen: false
  };

  openDropDown = (value = !this.state.isOpen) => () => {
    this.setState({isOpen: value});
  };

  render() {
    return (
      <div>
        <MyDropDownTitle
          value={this.state.isOpen}
          onClick={this.openDropDown}
        />
      </div>
    );
  }
}

export default DropDownTitle;
