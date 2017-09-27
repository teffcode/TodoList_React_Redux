/*
 * ACTIONS: Send data from your app to your store
 * They are the only source of information for the store
 * You send them to the store using store.dispatch ().
 * 
 * ARE PLAIN OBJECTS
 * 
 */

let nextTodoId = 0;

/* 
 * Action creator -> FUNCTION THAT CREATE ACTIONS
 * ACTION 1 -> Add todo
 */
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO', // Action type - STRING 
    id: (nextTodoId++).toString(),
    text,
  };
};

// ACTION 2 -> Change currently visible tasks
export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  };
};