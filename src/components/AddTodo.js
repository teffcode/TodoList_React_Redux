import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

/*
 * DISPATCH: Only way to make a change in the state
 */

const AddTodo = () => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          addTodo(input.value);
          input.value = '';
        }}
      >
        <input ref={node => { input = node; }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

/* 
 * CONNECT: To map the stores state and dispatch to the props of a component
 */ 
export default connect()(AddTodo);