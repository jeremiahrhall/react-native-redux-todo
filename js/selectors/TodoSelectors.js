
import { FilterKeys } from '../constants/TodoFilters';

const TodoSelectors = {

    getTodos(state) {
        return state.todos;
    },

    getTodosFor(filter, todos) {
        if (filter == FilterKeys.SHOW_ACTIVE) {
            return todos.filter(todo => !todo.get('completed'));
        }

        if (filter == FilterKeys.SHOW_COMPLETED) {
            return todos.filter(todo => todo.get('completed'));
        }

        return todos;
    }

};

export default TodoSelectors;
