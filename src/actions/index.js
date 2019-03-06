import * as types_counter from './counter';
import * as types_ui from './ui';

export function increment() {
  return {
    type: types_counter.INCREMENT
  };
}

export function decrement() {
  return {
    type: types_counter.DECREMENT
  };
}

export function setColor(color) {
  return {
    type: types_ui.SET_COLOR,
    color
  };
}