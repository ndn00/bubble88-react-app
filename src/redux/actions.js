export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const addItem = (newItem) => ({
  type: UPDATE_ITEM,
  payload: newItem,
});

export const deleteItem = (name) => ({
  type: DELETE_ITEM,
  payload: name,
});
