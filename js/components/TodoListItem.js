import React from 'react-native';
import ReactART from 'ReactNativeART';

import color from 'color';
import Swipeout from 'react-native-swipeout';

import { Color } from '../styles';

const { Surface, Group, Shape } = ReactART;

const {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
} = React;

const styles = StyleSheet.create({
    container: {
        height: 60,
        flex: 6,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
    },
    input: {
        flex: 5,
        paddingLeft: 12,
        paddingRight: 12,
        fontSize: 18,
        letterSpacing: 0.45,
        lineHeight: 40,
    },
    switch: {
        flex: 1,
    },
    switchContainer: {
        flex: 1.25,
        flexDirection: 'row',
    },
    delete: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-around',
    },
    deleteText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#DD3333'
    },
    indicator: {
        width: 6,
        height: 60
    }
});

const TodoListItem = React.createClass({

    propTypes: {
        todo: React.PropTypes.object.isRequired,
        deleteTodo: React.PropTypes.func.isRequired,
        editTodo: React.PropTypes.func.isRequired,
        completeTodo: React.PropTypes.func.isRequired,
        rowId: React.PropTypes.number.isRequired,
    },

    getInitialState() {
        return {
            editing: false,
        };
    },

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.todo != this.props.todo) {
            this.setState({ editing: false });
        }
    },

    getAccentColor() {
        return this.props.todo.completed ? Color.rgb.fadedGreen : Color.raw.lightBlue.clone().desaturate(1).rgbString();
    },

    getSwipeButtons() {
        return [
            {
                text: 'Delete',
                onPress: () => this.deleteTodo(),
                type: 'default',
                color: Color.rgb.white,
                backgroundColor: Color.rgb.fadedRed,
                underlayColor: color(this.getAccentColor()).darken(0.2),
            }
        ];
    },

    getText() {
        if (!this.state.editing) {
            return (
                <Text style={styles.input} onPress={() => this.setState({ editing: !this.state.editing })}>
                    {this.props.todo.text}
                </Text>
            );
        }

        return (
            <TextInput
                autoFocus={true}
                onBlur={() => this.setState({ editing: !this.state.editing })}
                style={styles.input}
                placeholder={"What needs to be done?"}
                defaultValue={this.props.todo.text}
                maxLength={140}
                onSubmitEditing={this.onSubmit}
                onChangeText={this.onChange}
            />
        )
    },

    render() {
        return (
            <Swipeout right={this.getSwipeButtons()} close={true}>
                <View style={[styles.container]}>
                    <TouchableOpacity style={[styles.switchContainer]} onPress={() => this.props.completeTodo(this.props.todo.id)}>
                        <View style={[ styles.indicator, { backgroundColor: this.getAccentColor() }]}></View>
                        <Surface height={60} width={60}>
                            <Shape d="M10.083,29.692l13.462,13.509l26.538,-27.121" strokeWidth={2} stroke={this.getAccentColor()}/>
                        </Surface>
                    </TouchableOpacity>
                    {this.getText()}
                </View>
            </Swipeout>
        );
    },

    getInitialState() {
        return { text: this.props.todo.text };
    },

    onChange(text) {
        this.setState({ text: text });
    },

    onSubmit() {
        this.props.editTodo(this.props.todo.id, this.state.text);
    },

    deleteTodo() {
        this.props.deleteTodo(this.props.todo.id);
    },

});

export default TodoListItem;
