import * as at from 'constants/actionTypes';

export function foo(message) {
  return {
    type: at.FOO,
    message,
  };
}
