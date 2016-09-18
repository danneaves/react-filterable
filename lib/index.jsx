import React, {PropTypes} from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import Filter from './Container';
import * as actions from './Actions';
import configureStore from './Store';

const SmartFilter = connect(state => state, actions)(Filter);

const reduxMiddleware = applyMiddleware(thunk, createLogger());

export default props => (
    <Provider store={compose(reduxMiddleware)(createStore)(configureStore(props))}>
        <SmartFilter {...props}/>
    </Provider>
);

export { default as createFilter } from './Selector';
export { default as Collection   } from './Collection';
export { default as ToggleButton } from './ToggleButton';