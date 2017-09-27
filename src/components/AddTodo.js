import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const AddTodo = () => <div>Add Todo</div>;

/* 
 * CONNECT: To map the stores state and dispatch to the props of a component
 */ 
export default connect()(AddTodo);