import React from 'react-native';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';

import NavigatorKeys from '../constants/NavigatorKeys';

import { jumpForward, jumpBack, pop, push } from '../actionCreators/NavigationActionCreators';
import { getNavigatorForKey } from '../selectors/NavigationSelectors';

import Navigator from './Navigator';

const {
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} = React;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      marginTop: 20,
  }
});

const AppContainer = React.createClass({

    render() {
        return (
            <View style={styles.container}>
                <Navigator navigatorKey={NavigatorKeys.ROOT}/>
            </View>
        );
    },

});

export const Component = AppContainer;

export default connect(
    (state) => {
        return { navigator: getNavigatorForKey(NavigatorKeys.ROOT) };
    },
    (dispatch) => bindActionCreators({ jumpForward, jumpBack, pop, push }, dispatch)
)(AppContainer);
