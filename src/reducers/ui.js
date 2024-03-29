import * as types from '../actions/ui';

const initialState = {
  color: [255, 255, 255]
};

export default function ui(state = initialState, action) {
  if(action.type === types.SET_COLOR) {
    return {
      ...state,
      color: action.color
    };
  } else {
    return state;
  }
}