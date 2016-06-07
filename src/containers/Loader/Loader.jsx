import React, { Component} from 'react';
import { default as MyLoader } from 'components/Loader';
import Helmet from 'react-helmet';

export default class Loader extends Component {
    state = {
      active: false
    };

    loaderToggle = (value = !this.state.active) => () => {
      console.log(value);
      this.setState({active: value});
    };

    render() {
      const {value} = this.state;
      return (
          <div>
            <Helmet title='Loader'/>
            <MyLoader
                value = {value}
                onClick= {this.loaderToggle}
            />
          </div>
        );
    }
}
