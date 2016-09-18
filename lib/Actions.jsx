import Constants from './Constants';

export function enable(name) {
    return dispatch => dispatch({
        type: Constants.FILTER_ENABLE,
        name: name
    });
}

export function disable(name) {
    return dispatch => dispatch({
        type: Constants.FILTER_DISABLE,
        name: name
    });
}

export function toggle(name) {
    return dispatch => dispatch({
        type: Constants.FILTER_TOGGLE,
        name: name
    });
}

export function register(name,filter) {
    return dispatch => dispatch({
        type:   Constants.FILTER_REGISTER,
        name:   name,
        filter: filter
    });
}

export function unregister(name) {
    return dispatch => dispatch({
        type: Constants.FILTER_UNREGISTER,
        name: name
    });
}

export function clear() {
    return dispatch => dispatch({
        type: Constants.FILTER_CLEAR
    });
}

export function reset() {
    return dispatch => dispatch({
        type: Constants.FILTER_RESET
    });
}