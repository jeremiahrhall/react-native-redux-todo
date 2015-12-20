import React from 'react-native';

import { Color } from '../styles';

const {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    TextInput
} = React;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: Color.rgb.lightGray,
        borderBottomColor: Color.rgb.lightGray,
        shadowColor: Color.rgb.lightGray,
        backgroundColor: Color.rgb.white,
    },
    input: {
        flex: 6,
        padding: 16
    },
});

const TodoTextInput = React.createClass({

    propTypes: {
        addTodo: React.PropTypes.func.isRequired,
    },

    getInitialState() {
        return {
            text: null
        };
    },

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={this.state.text}
                    placeholder={"What needs to be done?"}
                    maxLength={140}
                    onSubmitEditing={this.onSubmit}
                    onChangeText={this.onChange}
                />
            </View>
        );
    },

    onChange(text) {
        this.setState({ text: text });
    },

    onSubmit() {
        this.props.addTodo(this.state.text);
        this.setState({ text: null });
    },

});

export default TodoTextInput;
