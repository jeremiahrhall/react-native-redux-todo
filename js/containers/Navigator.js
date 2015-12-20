import React from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import Immutable from 'immutable';

import { removeAction } from '../actionCreators/NavigationActionCreators';
import NavigationSelectors from '../selectors/NavigationSelectors';
import { ComponentMapping } from '../constants/NavigationConstants';
import NavigatorActionTypes from '../constants/NavigationActionTypes';

const {
    Navigator
} = React;

const {
    getActionsForNavigatorKey,
    getInitialRouteFor,
    getSceneConfigFrom,
    getTypeFrom,
    getComponentKeyFrom
} = NavigationSelectors;

const NavigatorComponent = React.createClass({

    propTypes: {
        navigatorKey: React.PropTypes.string.isRequired,
        navigatorActions: React.PropTypes.instanceOf(Immutable.List),
        initialRoute: React.PropTypes.instanceOf(Immutable.Map),
    },

    render() {
        return (
            <Navigator
                ref="thisNavigator"
                initialRoute={this.props.initialRoute}
                renderScene={this.renderScene}
                configureScene={this.configureScene}/>
        );
    },

    renderScene(route, navigator) {
        if (!this.props.navigatorActions) {
            return null;
        }

        let Component = this.getComponentForKey(getComponentKeyFrom(route));

        if (!Component) {
            return (
                null
            );
        }

        return (
            <Component
                navigatorKey={this.props.navigatorKey} />
        );
    },

    componentDidUpdate(prevProps, prevState) {
        if (!this.props.navigatorActions || this.props.navigatorActions.size == 0) {
            return;
        }

        let action = this.props.navigatorActions.first();

        switch (getTypeFrom(action)) {

            case NavigatorActionTypes.NAVIGATOR_JUMP_BACK:
                this.refs.thisNavigator.jumpBack();
                break;

            case NavigatorActionTypes.NAVIGATOR_JUMP_FORWARD:
                this.refs.thisNavigator.jumpForward();
                break;

            case NavigatorActionTypes.NAVIGATOR_JUMP_TO:
                this.refs.thisNavigator.jumpTo(action);
                break;

            case NavigatorActionTypes.NAVIGATOR_PUSH:
                this.refs.thisNavigator.push(action);
                break;

            case NavigatorActionTypes.NAVIGATOR_POP:
                this.refs.thisNavigator.pop();
                break;

            case NavigatorActionTypes.NAVIGATOR_REPLACE:
                this.refs.thisNavigator.replace(action);
                break;

            case NavigatorActionTypes.NAVIGATOR_REPLACE_AT_INDEX:
                this.refs.thisNavigator.replaceAtIndex(action, action.index);
                break;

            case NavigatorActionTypes.NAVIGATOR_REPLACE_PREVIOUS:
                this.refs.thisNavigator.replacePrevious(action);
                break;

            case NavigatorActionTypes.NAVIGATOR_IMMEDIATELY_RESET_ROUTE_STACK:
                this.refs.thisNavigator.immediatelyResetRouteStack(action.stack);
                break;

            case NavigatorActionTypes.NAVIGATOR_POP_TO_ROUTE:
                this.refs.thisNavigator.popToRoute(action);
                break;

            case NavigatorActionTypes.NAVIGATOR_POP_TO_TOP:
                this.refs.thisNavigator.popToTop();
                break;

        }

        this.props.removeAction(this.props.navigatorKey, action);
    },

    configureScene(route) {
        if (!this.props.navigatorActions || !getSceneConfigFrom(route)) {
            return null;
        }

        return Navigator.SceneConfigs[getSceneConfigFrom(route)];
    },

    getComponentForKey(key) {
        return ComponentMapping[key];
    }

});

export const Component = NavigatorComponent;

export default connect(
    (state, props) => {
        return {
            navigatorActions: getActionsForNavigatorKey(props.navigatorKey)(state),
            initialRoute: getInitialRouteFor(props.navigatorKey)(state)
        };
    },
    (dispatch) => {
        return bindActionCreators({ removeAction }, dispatch);
    }
)(NavigatorComponent);
