import React from 'react-native';

import Immutable from 'immutable';

import TodoListItem from './TodoListItem';

const {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    TextInput,
    ListView
} = React;

const styles = StyleSheet.create({
    container: {
        flex: 10
    },
    title: {

    },
});

const TodoList = React.createClass({

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
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.getListDataSource()}
                    renderRow={this.renderRow}
                />
            </View>
        );
    },

    getListDataSource() {
        return new ListView.DataSource({
            rowHasChanged: (a, b) => a !== b
        }).cloneWithRows(this.props.todos.toJS());
    },

    renderRow(rowData, sectionId, rowId) {
        return (
            <TodoListItem
                todo={rowData}
                rowId={rowId}
                deleteTodo={this.props.deleteTodo}
                editTodo={this.props.editTodo}
                completeTodo={this.props.completeTodo}
            />
        );
    },

});

export default TodoList;
