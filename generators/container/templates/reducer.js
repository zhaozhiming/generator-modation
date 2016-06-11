import * as at from 'constants/actionTypes';


const initialState = {};

export default function someReducer(state = initialState, action) {
  switch (action.type) {
    case at.SOME_ACTION:
      return state;
    default:
      return state;
  }
}
