import React from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';

import Immutable from 'immutable';

import { addTodo, deleteTodo, editTodo, completeTodo, completeAll, clearCompleted } from '../actionCreators/TodoActionCreators';

import { getTodosFor, getTodos } from '../selectors/TodoSelectors';

import { FilterKeys, FilterValues, FilterLabels } from '../constants/TodoFilters';
import TodoTextInput from '../components/TodoTextInput';
import TodoList from '../components/TodoList';
import TodoFilterBar from '../components/TodoFilterBar';

const {
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} = React;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
});

const Todos = React.createClass({

    propTypes: {
        todos: React.PropTypes.instanceOf(Immutable.List).isRequired,
        addTodo: React.PropTypes.func.isRequired,
        deleteTodo: React.PropTypes.func.isRequired,
        editTodo: React.PropTypes.func.isRequired,
        completeTodo: React.PropTypes.func.isRequired,
        completeAll: React.PropTypes.func.isRequired,
        clearCompleted: React.PropTypes.func.isRequired,
    },

    render() {
        if (!this.props.todos) {
            return (
                null
            );
        }

        let todos = getTodosFor(this.state.selectedFilter, this.props.todos);

        return (
            <View style={styles.container}>
                <TodoTextInput addTodo={this.props.addTodo} />
                <TodoList
                    todos={todos}
                    addTodo={this.props.addTodo}
                    deleteTodo={this.props.deleteTodo}
                    editTodo={this.props.editTodo}
                    completeTodo={this.props.completeTodo}
                    completeAll={this.props.completeAll}
                    clearCompleted={this.props.clearCompleted}
                />
                <TodoFilterBar
                    todosLeft={getTodosFor(FilterKeys.SHOW_ACTIVE, this.props.todos).size}
                    selectedFilter={this.state.selectedFilter}
                    onFilterChange={filter => this.onFilterChange(filter)}
                />
            </View>
        );
    },

    getInitialState() {
        return {
            selectedFilter: FilterKeys.SHOW_ALL
        };
    },

    onFilterChange(filter) {
        this.setState({ selectedFilter: FilterValues[FilterLabels.indexOf(filter)] });
    }

});

export const Component = Todos;

export default connect(
    (state, props) => {
        return {
            todos: getTodos(state)
        };
    },
    (dispatch) => {
        return bindActionCreators({
            addTodo,
            deleteTodo,
            editTodo,
            completeTodo,
            completeAll,
            clearCompleted
        }, dispatch);
    }
)(Todos);
