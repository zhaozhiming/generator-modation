import * as at from 'constants/actionTypes';

export function changeName(name) {
  return {
    type: at.CHANGE_NAME,
    name,
  };
}

export function changeMessage(message) {
  return {
    type: at.CHANGE_MESSAGE,
    message,
  };
}

<% if (serverSide) { -%>
export function randomName(num) {
  return async (dispatch) => {
    const response = await fetch('/api/name/random', {
      method: 'post',
      body: JSON.stringify({
        num,
      }),
    });
    const result = await response.json();
    return dispatch(changeName(result.name));
  };
}
<% } -%>
