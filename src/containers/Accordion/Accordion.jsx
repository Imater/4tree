import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { default as MyAccordion } from 'components/Accordion';
import { toggleItem } from 'redux/modules/accordion.js';

@connect((state) => {
  return {
    openedItems: state.accordion.openedItems
  };
})
export default class Accordion extends Component {

  static propTypes = {
    openedItems: PropTypes.array,
    dispatch: PropTypes.func
  };

  toggleItem = (index) => {
    this.props.dispatch(toggleItem(index));
  }

  render() {
    const { openedItems } = this.props;
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
          openedItems={openedItems}
          onClick={this.toggleItem}
        />
      </div>
    );
  }
}
