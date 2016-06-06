import * as at from 'constants/actionTypes';


export function someAction(msg) {
  return {
    msg,
    type: at.SOME_ACTION,
  };
}
