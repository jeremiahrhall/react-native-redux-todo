import types from '../constants/TodoActionTypes';

export function addTodo(text) {
    return (dispatch) => {
        return dispatch({ type: types.ADD_TODO, text });
    };
}

export function deleteTodo(id) {
    return (dispatch) => {
        return dispatch({ type: types.DELETE_TODO, id });
    };
}

export function editTodo(id, text) {
    return (dispatch) => {
        return dispatch({ type: types.EDIT_TODO, id, text });
    };
}

export function completeTodo(id) {
    return (dispatch) => {
        return dispatch({ type: types.COMPLETE_TODO, id });
    };
}

export function completeAll() {
    return (dispatch) => {
        return dispatch({ type: types.COMPLETE_ALL });
    };
}

export function clearCompleted() {
    return (dispatch) => {
        return dispatch({ type: types.CLEAR_COMPLETED });
    };
}
