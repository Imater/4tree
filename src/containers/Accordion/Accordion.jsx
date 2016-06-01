import React, { Component} from 'react';
import { default as MyAccordion } from 'components/Accordion';

export default class Accordion extends Component {
  state = {
    openedItems: []
  };

  toggleItem = (index) => {
    const { openedItems } = this.state;

    this.setState({
      openedItems: [
        ...openedItems.slice(0, index),
        !openedItems[index],
        ...openedItems.slice(index + 1)
      ]
    });
  };

  render() {
    return (
      <div>
        <h1>
          Accordion
        </h1>
        <MyAccordion
          items={[
            {
              title: 'First title',
              content: (
                <div>
                  <h2>Hello</h2>
                </div>
              )
            },
            {
              title: 'Second title',
              content: 'Nulla modi natus sunt molestiae voluptates, tenetur rem, id voluptatibus. Veritatis dolorem hic vel sunt qui quibusdam corporis.'
            },
            {
              title: 'Third title',
              content: 'Illum nemo saepe ducimus architecto at porro sunt? Maiores quia sequi natus aperiam.'
            }
          ]}
          openedItems={this.state.openedItems}
          onClick={this.toggleItem}
        />
      </div>
    );
  }
}
