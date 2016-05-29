import React, { Component} from 'react';
import { default as MyAccordion } from 'components/Accordion';

export default class Accordion extends Component {
  state = {
    items: [
      {
        title: 'First title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quaerat corporis ipsum perspiciatis officia, magnam nisi eos libero eaque ex quas laborum?',
        isOpened: false
      },
      {
        title: 'Second title',
        content: 'Nulla modi natus sunt molestiae voluptates, tenetur rem, id voluptatibus. Veritatis dolorem hic vel sunt qui quibusdam corporis.',
        isOpened: false
      },
      {
        title: 'Third title',
        content: 'Illum nemo saepe ducimus architecto at porro sunt? Maiores quia sequi natus aperiam.',
        isOpened: false
      }
    ]
  };

  handleClick = (index) => () => {
    const { items } = this.state;
    this.setState({
      items: [
        ...items.slice(0, index),
        {
          ...items[index],
          isOpened: !items[index].isOpened
        },
        ...items.slice(index + 1)
      ]
    });
  };

  render() {
    return (
      <div>
        <h1>
          Accordion
        </h1>
        <MyAccordion items={this.state.items} handleClick={this.handleClick} />
      </div>
    );
  }
}
