import React from 'react-native';
import _ from 'lodash';

import { FilterLabels, FilterValues, FilterKeys } from '../constants/TodoFilters';
import { Color } from '../styles';

const {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    TextInput,
    SegmentedControlIOS,
    TabBarIOS
} = React;

const styles = StyleSheet.create({
    container: {
        flex: 1.25,
        padding: 8,
        flexDirection: 'column',
        backgroundColor: Color.raw.darkslateblue.clone().desaturate(0.35).lighten(0.55).rgbString(),
    },
    todosLeft: {
        flex: 1,
        textAlign: 'center',
        backgroundColor: Color.raw.darkslateblue.clone().desaturate(0.35).lighten(0.55).rgbString(),
        color: Color.rgb.white,
    },
    filters: {
        flex: 1,
        backgroundColor: Color.raw.darkslateblue.clone().desaturate(0.15).lighten(1.5).rgbString(),
        borderColor: 'black',
        color: 'black',
        borderRadius: 5
    },
});

const TodoTextInput = React.createClass({

    propTypes: {
        todosLeft: React.PropTypes.number.isRequired,
        selectedFilter: React.PropTypes.string.isRequired,
        onFilterChange: React.PropTypes.func.isRequired,
    },

    getSegmentedControl() {
        return (
            <SegmentedControlIOS
                style={styles.filters}
                values={FilterLabels}
                tintColor={Color.raw.darkslateblue.clone().saturate(0.65).lighten(0.5).rotate(120).rgbString()}
                selectedIndex={FilterValues.indexOf(this.props.selectedFilter)}
                onValueChange={this.props.onFilterChange} />
        );
    },

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.todosLeft}>
                    {this.props.todosLeft} {this.props.todosLeft == 1 ? 'item' : 'items'} left
                </Text>
                {this.getSegmentedControl()}
            </View>
        );
    },

});

export default TodoTextInput;
