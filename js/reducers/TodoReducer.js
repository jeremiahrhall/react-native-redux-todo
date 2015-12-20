import Immutable from 'immutable';
import { REHYDRATE } from 'redux-persist/constants';

import TodoActionTypes from '../constants/TodoActionTypes';

const initialState = Immutable.fromJS([
    {
        text: 'Use Redux',
        completed: false,
        id: 0,
    },
]);

export default function(state, action) {

    state = state || initialState;

    switch (action.type) {

        case TodoActionTypes.ADD_TODO:
            return state.push(
                Immutable.Map({
                    id: state.reduce((maxId, todo) => Math.max(todo.get('id'), maxId), -1) + 1,
                    completed: false,
                    text: action.text
                })
            );

        case TodoActionTypes.DELETE_TODO:
            return state.filter(todo => todo.get('id') !== action.id);

        case TodoActionTypes.EDIT_TODO:
            return state.map(todo => todo.get('id') === action.id ? todo.set('text', action.text) : todo);

        case TodoActionTypes.COMPLETE_TODO:
            return state.map(todo => todo.get('id') === action.id ? todo.set('completed', !todo.get('completed')) : todo);

        case TodoActionTypes.COMPLETE_ALL:
            const areAllMarked = state.every(todo => todo.get('completed'));
            return state.map(todo => todo.set('completed', areAllMarked));

        case TodoActionTypes.CLEAR_COMPLETED:
            return state.filter(todo => todo.get('completed') === false)

        case REHYDRATE:
            if (action.key !== 'todos') {
                return state;
            }

            state = action.payload;

            return state;

        default:
            return state

    }
}
