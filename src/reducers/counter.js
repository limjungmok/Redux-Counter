import * as types from '../actions/counter';

const initialState = {
  number: 0
};

export default function counter(state = initialState, action) {
  switch(action.type) {
    case types.INCREMENT:
      // return { 
      //   ...state, 
      //   number: state.number + 1 
      // };
      const newState = Object.assign({}, state, {
        number: state.number + 1
      });
      return newState;
    case types.DECREMENT:
      return { 
        ...state, 
        number: state.number - 1 
      };
    default:
      return state;
  }
}