import axios from 'axios';

export const removeItem = (itemType, id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: { itemType, id },
  };
};

export const addItem = (itemType, itemContent) => {
  const getId = () =>
    `_${Math.random()
      .toString(36)
      .substr(2, 9)}`;

  return {
    type: 'ADD_ITEM',
    payload: {
      itemType,
      item: { id: getId(), ...itemContent },
    },
  };
};

export const authenticate = (username, password) => async dispatch => {
  try {
    dispatch({ type: 'AUTHENTICATE_REQUEST' });
    const response = await axios.post('http://localhost:9000/api/user/login', {
      username,
      password,
    });

    dispatch({ type: 'AUTHENTICATE_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'AUTHENTICATE_FAILURE', payload: error });
  }
};
