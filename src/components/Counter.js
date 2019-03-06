import React, { Component } from 'react';

import Value from './Value';
import Control from './Control';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.handleRandomize = this.handleRandomize.bind(this);
  }

  handleRandomize(handler) {
    const color = [
      Math.floor((Math.random() * 55) + 200),
      Math.floor((Math.random() * 55) + 200),
      Math.floor((Math.random() * 55) + 200)
    ];
    
    handler(color);
  }

  render() {
    const {
      number,
      color,
      handleIncrement,
      handleDecrement,
      handleSetColor
    } = this.props;
    return (
      <div>
        <Value 
          number = {number}
          color = {color}
        />
        <Control 
          handleIncrement = {handleIncrement}
          handleDecrement = {handleDecrement}
          handleRandomize = {() => this.handleRandomize(handleSetColor)}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.counter.number,
    color: state.ui.color
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrement: () => { dispatch(actions.increment()) },
    handleDecrement: () => { dispatch(actions.decrement()) },
    handleSetColor: (color) => { dispatch(actions.setColor(color)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);