// import React from 'react';
const React = require('react');


class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      thisClicked: ++this.state.timesClicked,
    });
  }

  render() {
    return(
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    );
  }
}

// export default DigitalClicker
module.exports = DigitalClicker;
